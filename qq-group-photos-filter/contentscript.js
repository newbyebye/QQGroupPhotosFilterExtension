/**
 * 筛选图片
 *
 * @param {dispalyUin}  要显示图片的QQ号，为空时显示所有图片
 */
function filterImages(displayUin) {

    //获取图片列表
    var id = "groupzone_photo_list";
    var photoList = document.getElementById(id).children;

    for (var i = 0; i < photoList.length; i++) {

        var photo = photoList[i];
        var uin = photo.getAttribute("data-owneruin");

        if (displayUin.length == 0 || displayUin == uin) {
            //显示图片
            photo.setAttribute("style", "");
        } else {
            //隐藏图片
            photo.setAttribute("style", "display:none");
        }
    }
}

