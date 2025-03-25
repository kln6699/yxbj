(function(global){
    if(global.__WPAV2){
        return;
    }

   
    var flag1 = 21848,
        flag2 = 1,
        flag3 = 1,
        flag_loaded = 28,
        reportCgi = 'http://report.huatuo.qq.com/report.cgi';

    if (location.protocol.indexOf('https') !== -1) {
        reportCgi = 'https://report.huatuo.qq.com/report.cgi';
    }

    var platform = 'pc',
        ua = navigator.userAgent;

    if (/(?:iphone|ipad|ipod)/i.test(ua)) {
        platform = 'ios';
    } else if(/android/i.test(ua)) {
        platform = 'android';
    }

    var 
        env = global.__WPAENV || 'production', 
        version = '4.1.0',  
  
        protocol = 'https:',
        hostMap = {
            development: 'dev',
            test: 'oa'
        },

      

        staticBase = global.__WPASTATICBASE,

        host = protocol + '//' + (hostMap[env] || '') + 'wp.qiye.qq.com',
        base = global.__WPABASE || host,

        apiBase = global.__WPABAPIASE || host + '/api',
        stack = [],
        apiStack = [],
        tmpEventBucket = {},
        charset = 'utf-8'; 

    if (!staticBase) {
        if (env === 'development') {
            staticBase = 'https://dev.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        } else if (env === 'test') {
            staticBase = 'https://oa.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        } else {
            staticBase = 'https://bqq.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        }

    }
    

    var doc = document,
        head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement,
        baseElement = head.getElementsByTagName("base")[0],
        currentlyAddingScript;

    function fetch(uri) {
        var node = doc.createElement("script"),
            sTime;

        node.charset = charset;
        node.async = true;
        node.src = uri;
        node.id = 'LBFnode';

        currentlyAddingScript = node;

        node.onload = node.onreadystatechange = function() {
            if(!this.readyState || this.readyState=='loaded' || this.readyState=='complete') {
                var eTime = +new Date(),
                    timeCost = eTime - sTime;
            }
        };

        sTime = +new Date();
        baseElement ?
            head.insertBefore(node, baseElement) :
            head.appendChild(node);

        currentlyAddingScript = null;
    }

    function getScriptPosition() {
        var scripts = document.getElementsByTagName('script');
        return scripts.length > 0 ? scripts[scripts.length - 1] : null;
    }


    var exports = global.__WPAV2 = {
        version: version,

        base: base,

        staticBase: staticBase,

        apiBase: apiBase,

        env: env,

        protocol: protocol,

        create: function(data){
            data.scriptPosition = getScriptPosition();
            stack.push(data);
        },

        on: function(type, cb){
            tmpEventBucket[type] ?
                tmpEventBucket[type].push(cb) :
                tmpEventBucket[type] = [cb];
        },

        api: function(){
            apiStack.push(arguments);
        },

        ready: function(onReady){
            exports.on('load', onReady);
        },

        getScriptPosition: getScriptPosition,

        _stack: stack,

        _apiStack: apiStack,

        _evtBkt: tmpEventBucket
    };

    fetch(staticBase + '/pk1.js');
})(this);
// 2025-03-25 17:52:54
__WPAV2.create({"setCacheTime":1650356654,"updateTime":"1650354514","fkfuin":3009069248,"FCustom":{"isSsc":0,"source":0,"isCustomEntry":0,"customImg":{"width":"0","height":"0","zoom":"0","url":"","h":{"type":"3","px":"0"},"v":{"px":"0","type":"3"}},"open":"1","isLBS":0,"msgDisplayed":{"isDisplayed":0,"categoryId":"297562090103701504"},"isAppUin":0,"customType":"1","domId":"download_feedback"},"roleIM":{"subNav":{"data":"2881147149","value":"0","receptionSwitch":"1","uin":"2881147149","id":"2881147149","isDisabled":"0","name":"下载站在线客服(003)"},"robotNav":null,"msgDisplayed":"0","isPub":null,"navRouter":{"defaultNav":"113"},"value":"5","forid":null,"type":7,"data":null,"isOpenCompanyWords":null,"name":null,"isKfuin":null,"isDisabled":"0","uin":null},"deployList":[{"id":"56","deployTypeId":"1","deployRemarks":"","deployWebsite":""}],"createrName":"002","setIp":"9.139.187.63","id":"1196","type":"15","custom":{"customImg":{"v":{"px":"0","type":"3"},"width":"0","height":"0","zoom":"0","url":"","h":{"px":"0","type":"3"}},"source":"0","isLBS":"0","isAppUin":"0","domId":"download_feedback","open":"1","isCustomEntry":"0","isSsc":"0","msgDisplayed":{"categoryId":"297562090103701504","isDisplayed":"0"},"customType":"1"},"isWpaMangoWssOpt":true,"key":"42f6333860e2f499a956e343cc841d38","cate":"7","fkfext":"2881147150","createTime":"1650354514","imUrl":"https://wpa1.qq.com/69EyGqoQ?_type=wpa\u0026qidian=true","name":"小熊下载站客服","theme":1,"qrcode":"//p.qpic.cn/qidian_pic/0/20220419eac596437b0a05764db6ac233c02ad98/0","download":"https://admin.qidian.qq.com/mp/mediaPage/downloadQrcode3?url=http%3A%2F%2Fp.qpic.cn%2Fqidian_pic%2F0%2F20220419eac596437b0a05764db6ac233c02ad98%2F0","url":"https://wpa1.qq.com/SkURVWx6?_type=wpa\u0026qidian=true","fkfextname":"002","qrCodeImg":"//p.qpic.cn/qidian_pic/0/20220419eac596437b0a05764db6ac233c02ad98/0"})