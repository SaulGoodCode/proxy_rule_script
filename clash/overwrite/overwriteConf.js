function main(config) {
  // 1. 设置代理组 (proxy-groups)
  config['proxy-groups'] = [
    {
      name: '🚀 节点选择',
      type: 'select',
      proxies: [
        '🇭🇰 香港节点',
        '🇨🇳 台湾节点',
        '🇸🇬 狮城节点',
        '🇯🇵 日本节点',
        '🇺🇲 美国节点',
        '🇰🇷 韩国节点',
        '🚀 手动切换',
        'DIRECT'
      ]
    },
    {
      name: '🚀 手动切换',
      'include-all': true,
      type: 'select'
    },
    {
      name: '🐟 漏网之鱼',
      type: 'select',
      proxies: [
        '🚀 节点选择',
        'DIRECT',
        '🇭🇰 香港节点',
        '🇨🇳 台湾节点',
        '🇸🇬 狮城节点',
        '🇯🇵 日本节点',
        '🇺🇲 美国节点',
        '🇰🇷 韩国节点',
        '🚀 手动切换'
      ]
    },
    {
      name: '🤖 AI服务',
      type: 'select',
      proxies: [
        '🚀 节点选择',
        '🇸🇬 狮城节点',
        '🇭🇰 香港节点',
        '🇨🇳 台湾节点',
        '🇯🇵 日本节点',
        '🇺🇲 美国节点',
        '🇰🇷 韩国节点',
        '🚀 手动切换',
        'DIRECT'
      ]
    },
    {
      name: 'Ⓜ️ 微软云盘',
      type: 'select',
      proxies: [
        'DIRECT',
        '🚀 节点选择',
        '🇺🇲 美国节点',
        '🇭🇰 香港节点',
        '🇨🇳 台湾节点',
        '🇸🇬 狮城节点',
        '🇯🇵 日本节点',
        '🇰🇷 韩国节点',
        '🚀 手动切换'
      ]
    },
    {
      name: 'Ⓜ️ 微软服务',
      type: 'select',
      proxies: [
        'DIRECT',
        '🚀 节点选择',
        '🇺🇲 美国节点',
        '🇭🇰 香港节点',
        '🇨🇳 台湾节点',
        '🇸🇬 狮城节点',
        '🇯🇵 日本节点',
        '🇰🇷 韩国节点',
        '🚀 手动切换'
      ]
    },
    {
      name: '🍎 苹果服务',
      type: 'select',
      proxies: [
        'DIRECT',
        '🚀 节点选择',
        '🇺🇲 美国节点',
        '🇭🇰 香港节点',
        '🇨🇳 台湾节点',
        '🇸🇬 狮城节点',
        '🇯🇵 日本节点',
        '🇰🇷 韩国节点',
        '🚀 手动切换'
      ]
    },
    {
      name: '🎮 游戏平台',
      type: 'select',
      proxies: [
        'DIRECT',
        '🚀 节点选择',
        '🇺🇲 美国节点',
        '🇭🇰 香港节点',
        '🇨🇳 台湾节点',
        '🇸🇬 狮城节点',
        '🇯🇵 日本节点',
        '🇰🇷 韩国节点',
        '🚀 手动切换'
      ]
    },
    {
      name: '🎥 奈飞视频',
      type: 'select',
      proxies: [
        '🚀 节点选择',
        '🇸🇬 狮城节点',
        '🇭🇰 香港节点',
        '🇨🇳 台湾节点',
        '🇯🇵 日本节点',
        '🇺🇲 美国节点',
        '🇰🇷 韩国节点',
        '🚀 手动切换',
        'DIRECT'
      ]
    },
    {
      name: '🇭🇰 香港节点',
      'include-all': true,
      filter: '(?i)港|HK|hk|Hong Kong|HongKong|hongkong',
      'exclude-filter': '游戏',
      type: 'url-test',
      interval: 300,
      tolerance: 50
    },
    {
      name: '🇯🇵 日本节点',
      'include-all': true,
      filter: '(?i)日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan',
      type: 'url-test',
      interval: 300,
      tolerance: 200
    },
    {
      name: '🇺🇲 美国节点',
      'include-all': true,
      filter: '(?i)美国|美西|美东|美利坚|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|\\bUS\\b|USA|United States',
      type: 'url-test',
      interval: 300,
      tolerance: 200
    },
    {
      name: '🇨🇳 台湾节点',
      'include-all': true,
      filter: '(?i)台|新北|彰化|TW|Taiwan',
      type: 'url-test',
      interval: 300,
      tolerance: 50
    },
    {
      name: '🇸🇬 狮城节点',
      'include-all': true,
      filter: '(?i)新加坡|坡|狮城|SG|Singapore',
      type: 'url-test',
      interval: 300,
      tolerance: 200
    },
    {
      name: '🇰🇷 韩国节点',
      'include-all': true,
      filter: '(?i)\\bKR\\b|Korea|\\bKOR\\b|首尔|韩|韓',
      type: 'url-test',
      interval: 300,
      tolerance: 200
    }
  ];

  // 2. 设置规则providers (rule-providers)
  config['rule-providers'] = {
    LocalAreaNetwork: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/LocalAreaNetwork.list',
      path: './ruleset/LocalAreaNetwork.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    UnBan: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/UnBan.list',
      path: './ruleset/UnBan.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    BanAD: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/BanAD.list',
      path: './ruleset/BanAD.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    BanProgramAD: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/BanProgramAD.list',
      path: './ruleset/BanProgramAD.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Bing: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Bing.list',
      path: './ruleset/Bing.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    OneDrive: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/OneDrive.list',
      path: './ruleset/OneDrive.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Microsoft: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Microsoft.list',
      path: './ruleset/Microsoft.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Apple: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Apple.list',
      path: './ruleset/Apple.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Epic: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Epic.list',
      path: './ruleset/Epic.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Origin: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Origin.list',
      path: './ruleset/Origin.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Sony: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Sony.list',
      path: './ruleset/Sony.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Steam: {
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Steam/Steam.list',
      path: './ruleset/Steam.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    SteamCN: {
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/SteamCN/SteamCN.list',
      path: './ruleset/SteamCN.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Tencent: {
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Tencent/Tencent.list',
      path: './ruleset/Tencent.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Nintendo: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Nintendo.list',
      path: './ruleset/Nintendo.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    YouTube: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/YouTube.list',
      path: './ruleset/YouTube.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Netflix: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Ruleset/Netflix.list',
      path: './ruleset/Netflix.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Proxy: {
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Global/Global.list',
      path: './ruleset/Proxy.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    ChinaDomain: {
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/China/China.list',
      path: './ruleset/ChinaDomain.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    ChinaIPs: {
      url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/ChinaIPs/ChinaIPs.list',
      path: './ruleset/ChinaIPs.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    Download: {
      url: 'https://testingcf.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/Download.list',
      path: './ruleset/Download.list',
      behavior: 'classical',
      interval: 86400,
      format: 'text',
      type: 'http'
    },
    AIGlobal: {
      url: 'https://cdn.jsdelivr.net/gh/VPSDance/ai-proxy-rules@main/rules/clash/global.yaml',
      path: './ruleset/AIGlobal.yaml',
      behavior: 'classical',
      interval: 86400,
      format: 'yaml',
      type: 'http'
    }
  };

  // 3. 设置分流规则 (rules)
  config['rules'] = [
    'RULE-SET,LocalAreaNetwork,DIRECT',
    'RULE-SET,UnBan,DIRECT',
    'RULE-SET,BanAD,REJECT',
    'RULE-SET,BanProgramAD,REJECT',
    'RULE-SET,AIGlobal,🤖 AI服务',
    'RULE-SET,SteamCN,DIRECT',
    'RULE-SET,Tencent,DIRECT',
    'RULE-SET,Bing,Ⓜ️ 微软服务',
    'RULE-SET,OneDrive,Ⓜ️ 微软云盘',
    'RULE-SET,Microsoft,Ⓜ️ 微软服务',
    'RULE-SET,Apple,🍎 苹果服务',
    'RULE-SET,Epic,🎮 游戏平台',
    'RULE-SET,Origin,🎮 游戏平台',
    'RULE-SET,Sony,🎮 游戏平台',
    'RULE-SET,Steam,🎮 游戏平台',
    'RULE-SET,Nintendo,🎮 游戏平台',
    'RULE-SET,YouTube,🚀 节点选择',
    'RULE-SET,Netflix,🎥 奈飞视频',
    'RULE-SET,Proxy,🚀 节点选择',
    'RULE-SET,Download,DIRECT',
    'RULE-SET,ChinaDomain,DIRECT',
    'RULE-SET,ChinaIPs,DIRECT',
    'GEOIP,CN,DIRECT',
    'MATCH,🐟 漏网之鱼'
  ];

  // 4. 设置流量嗅探 (sniffer)
  config['sniffer'] = {
    enable: true,
    'force-dns-mapping': true,
    'parse-pure-ip': true,
    'override-destination': true,
    sniff: {
      HTTP: { ports: [80, '8080-8880'], 'override-destination': true },
      TLS: { ports: [443, 8443] },
      QUIC: { ports: [443, 8443] }
    }
  };

  // 5. 设置虚拟网卡 (tun)
  config['tun'] = {
    enable: true,
    stack: 'system',
    'auto-route': true,
    'auto-detect-interface': true,
    'strict-route': true,
    'dns-hijack': ['any:53', 'tcp://any:53']
  };

  // 6. 设置DNS
  config['dns'] = {
    enable: true,
    listen: '0.0.0.0:1053',
    ipv6: false,
    'cache-algorithm': 'arc',
    'prefer-h3': false,
    'use-hosts': true,
    'use-system-hosts': true,
    'respect-rules': true,
    'enhanced-mode': 'fake-ip',
    'fake-ip-filter-mode': 'blacklist',
    'fake-ip-filter': [
      '+.cn',
      'rule-set:LocalAreaNetwork',
      'rule-set:SteamCN',
      'rule-set:Tencent',
      'rule-set:ChinaDomain',
      'rule-set:Download',
      '+.lan',
      '+.local',
      '+.msftncsi.com',
      'msftconnecttest.com',
      'connect.rom.miui.com',
      'connectivitycheck.platform.hicloud.com',
      'time.*.com',
      'time.*.gov',
      'time.*.apple.com',
      'pool.ntp.org'
    ],
    'default-nameserver': ['223.5.5.5', '119.29.29.29'],
    nameserver: ['https://1.1.1.1/dns-query#🚀 节点选择'],
    'proxy-server-nameserver': [
      'https://doh.pub/dns-query#DIRECT',
      'https://dns.alidns.com/dns-query#DIRECT'
    ],
    'direct-nameserver': [
      'system',
      'https://dns.alidns.com/dns-query',
      'https://doh.pub/dns-query'
    ]
  };

  // 7. 设置Hosts
  config['hosts'] = {
    'dns.alidns.com': ['223.5.5.5', '223.6.6.6'],
    'doh.pub': ['1.12.12.12', '120.53.53.53'],
    'services.googleapis.cn': ['services.googleapis.com'],
    '+.mcdn.bilivideo.com': ['0.0.0.0'],
    '+.mcdn.bilivideo.cn': ['0.0.0.0']
  };

  return config;
}
