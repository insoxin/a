var hv = "vertical";
var a = "4e4d610cdf714d2966000000";
var b = 48;
var c = 0;
var d = "hot";
var currentPage = 0;
var imgsUrl = [];
var i;
c = Math.floor(Math.random() * 1000) + 100;


$(function () {
    init0();
    init();
    c = 0;

});


function init0() {
    var div_row = $("#gg");
    for (var k = 0; k < b; k++) {
        div_row.append("  <div id=\"width\" class=\"col-lg-2 col-md-3 col-sm-6 col-xs-6\" style=\"padding: 5px\">\n" +
            "            <img class=\"img\"\n" +
            "                 src=\"https://cdn.jsdelivr.net/gh/insoxin/bz@main/insoimg/loading.gif\"\n" +
            "                 alt=\"图片加载中...\"\n" +
            "            >\n" +
            "        </div>");
    }

}


function init() {
    $.post("https://aibizhi.isoyu.com/v1/" + hv + "/category/" + a + "/" + hv + "?limit=" + b + "&skip=" + c + "&adult=true&first=0&order=" + d, function (data) {
        var imgs = document.getElementsByClassName("img");
        var col_width = document.getElementById("width");
        var width = col_width.offsetWidth;
        var image_width = 0.9 * width;
        var image_height = 10 * image_width / 7;
        for (i = 0; i < imgs.length; i++) {
            var url = data.res.vertical[i].wp;
            imgsUrl[i] = url;
            var img = imgs[i];
            img.width = image_width;
            img.height = image_height;
            img.src = "" + data.res.vertical[i].thumb;
            $(img).click({m: imgsUrl, i: i}, function (event) {
                window.open("" + event.data.m[event.data.i], "true - URL");
            });
        }
    }, "json");
    window.scrollTo(0,0);


}


function first() {
    currentPage = 0;
    c = 0;
    init();
}

function pre() {
    if (currentPage > 0) {
        currentPage--;
        c = currentPage * b;
        init();
    } else {
        alert("当前已是首页！！！");
    }

}


function next() {
    currentPage++;
    c = currentPage * b;
    init();

}

function random() {
    c = Math.floor(Math.random() * 1000) + 100;
    init();
}


function title_image() {
    currentPage = 0;
    c = 0;
    a = "4e4d610cdf714d2966000000";
    init();
}


function girls() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e4d610cdf714d2966000000";
    init();
}

function scenery() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e4d610cdf714d2966000002";
    init();
}

function animation() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e4d610cdf714d2966000003";
    init();
}

function animals() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e4d610cdf714d2966000001";
    init();
}

function game() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e4d610cdf714d2966000007";
    init();
}

function machine() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e4d610cdf714d2966000005";
    init();
}


function paint() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e4d610cdf714d2966000004";
    init();
}

function word() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "5109e04e48d5b9364ae9ac45";
    init();
}

function visual() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4fb479f75ba1c65561000027";
    init();
}

function monogatari() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4fb47a465ba1c65561000028";
    init();
}

function design() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4fb47a195ba1c60ca5000222";
    init();
}

function emotion() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4ef0a35c0569795756000000";
    init();
}

function city() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4fb47a305ba1c60ca5000223";
    init();
}

function film() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e58c2570569791a19000000";
    init();
}

function handsome() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "4e4d610cdf714d2966000006";
    init();
}

function stars() {
    currentPage = 0;
    c = Math.floor(Math.random() * 1000) + 100;
    a = "5109e05248d5b9368bb559dc";
    init();
}


function popular() {
    currentPage = 0;
    c = 0;
    d = "hot";
    init();
}

function newer() {
    currentPage = 0;
    c = 0;
    d = "new";
    init();
}


