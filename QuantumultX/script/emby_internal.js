/**
 * =======================================
 * 脚本名称: Emby 精准播放下载助手 (针对点击播放触发)
 * * 功能说明:
 * 1. 只有当你点击播放按钮，且 SenPlayer 准备开始解析视频流时才会弹窗。
 * 2. 自动注入 Token 和 Static=true 参数，确保获取的是原画直连下载地址。
 * * =======================================
[rewrite_local]
^https?:\/\/.*?\/emby\/Items\/.*?\/PlaybackInfo url script-response-body emby_internal.js
[mitm]
hostname = *.stentvessel.xyz
 * =======================================
 */

const $ = new Env('Emby下载助手');

(async () => {
    try {
        const reqUrl = $request.url;
        const bodyText = $response.body;
        if (!bodyText) { $done({}); return; }

        const body = JSON.parse(bodyText);
        
        // 核心逻辑：从真正的播放决策信息中提取第一个媒体源
        if (body.MediaSources && body.MediaSources.length > 0) {
            const mediaSource = body.MediaSources[0];
            const videoName = body.Name || mediaSource.Name || "未命名视频";
            
            // 1. 提取 Token (优先从请求头拿，因为你已经在播放流程中了)
            let token = $request.headers['x-emby-token'] || $request.headers['X-Emby-Token'];
            
            if (!token && $request.headers['x-emby-authorization']) {
                const auth = $request.headers['x-emby-authorization'];
                const match = auth.match(/Token="([^"]+)"/);
                if (match) token = match[1];
            }

            if (!token) {
                console.log("[Emby助手] 未捕获到播放 Token，尝试原路放行");
                $done({});
                return;
            }

            // 2. 构造真正的视频直链 (Direct Play Stream)
            // 提取基础服务器地址
            const serverUrl = reqUrl.substring(0, reqUrl.indexOf('/emby/'));
            const itemId = mediaSource.Id;
            const container = mediaSource.Container || "mp4";
            
            // 构造下载直链：强制 Static=true (不转码)，带上 api_key (鉴权)
            // 这里的 /emby/videos/{id}/stream 是 Emby 标准的二进制流接口
            const downloadUrl = `${serverUrl}/emby/videos/${itemId}/stream.${container}?api_key=${token}&Static=true&MediaSourceId=${itemId}`;

            // 3. 构建跳转 SenPlayer 下载的 Scheme
            const senScheme = `SenPlayer://x-callback-url/download?url=${encodeURIComponent(downloadUrl)}&name=${encodeURIComponent(videoName)}`;

            // 4. 发送通知
            $.msg(
                "Emby 播放直链捕获成功", 
                `视频: ${videoName}`, 
                "📥 点击此通知，立即开始下载原画片源", 
                {
                    "open-url": senScheme,
                    "media-url": downloadUrl
                }
            );

            console.log(`[Emby助手] 捕获成功: ${videoName}\n下载链接: ${downloadUrl}`);
        }

    } catch (e) {
        console.log(`[Emby助手] 解析异常: ${e.message}`);
    } finally {
        // 必须原样返回 body，否则视频无法播放
        $done({});
    }
})();

// --- 简单 Env 工具类 ---
function Env(name) {
    this.name = name;
    this.msg = (title, sub, body, opts) => {
        if (typeof $notify !== 'undefined') {
            $notify(title, sub, body, opts);
        } else {
            console.log(`${title}\n${sub}\n${body}`);
        }
    };
}
