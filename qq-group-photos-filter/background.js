/**
 * 注册标签页更新时的事件
 */
chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        initialize(tabId);
    }
);

/**
 * 注册切换标签页时的事件
 */
chrome.tabs.onSelectionChanged.addListener(
    function(tabId, selectInfo) {
        initialize(tabId);
    }
);

/**
 * 初始化方法 ，注入contentscript.js事件
 * @param {Object} tabId
 */
function initialize(tabId){
    chrome.tabs.executeScript(tabId, {
        file: "contentscript.js", 
        allFrames: true
    });
}

/**
 * 启动一个chrome.extension.onRequest事件监听器用来处理消息
 */
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        chrome.tabs.executeScript(null, {
            code: "filterImages("+ request +");", 
            allFrames: true
        });
    }
);

/**
 * 更改图片加载的数量
 */
chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace(/num=\d+/, "num=999");
        return {redirectUrl: url};
    },
    {urls: ["http://*.qzone.qq.com/*qun_list_photo_v2*"]},
    ['blocking']
);

