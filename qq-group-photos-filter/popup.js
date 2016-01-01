/**
 * 给按钮增加点击事件
 */
document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById("button");
    button.addEventListener('click', function(e){
        var displayUin = document.getElementById("input").value;
        chrome.tabs.executeScript(null, {
            code:"filterImages('"+ displayUin +"');", 
            allFrames: true
        });
    });
});

