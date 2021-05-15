$(function () {
    var imgUrl = document.URL;
    var div_width = document.getElementById("width");
    var img = document.getElementById("img");

    var img_width = div_width.offsetWidth;
    var img_height = img_width * 10/7;
    img.width = img_width;
    img.height = img_height;
    img.src = imgUrl.split('?')[1];
});