/**
 * Created by anan on 2017/11/19.
 */
var box = document.getElementsByClassName('pic_magnigy')[0];
var small = document.getElementsByClassName('small_pic_box')[0];
var big = document.getElementsByClassName('big_pic_box')[0];
var mask = document.getElementsByClassName('magnify_box')[0];
var bigImg = big.children[0];

//鼠标进入small显示big和mask；移开隐藏;
small.onmouseover = function () {
    //显示
    mask.style.display = 'block';
    big.style.display = 'block'
}
small.onmouseout = function () {
    //隐藏
    mask.style.display = 'none';
    big.style.display = 'none'
}


small.onmousemove = function (event) {

    var event = event || window.event;

    var pagex = event.pageX || event.clientX + scroll().left;
    var pagey = event.pageY || event.clientY + scroll().top;

    var smallx = box.offsetLeft;
    var smally = box.offsetTop;

    var x = pagex - smallx - mask.offsetWidth / 2;
    var y = pagey - smally - mask.offsetHeight / 2;

    if (x < 0) {
        x = 0;
    }
    if (x > small.offsetWidth - mask.offsetWidth) {
        x = small.offsetWidth - mask.offsetWidth;
    }

    if (y < 0) {
        y = 0;
    }
    if (y > small.offsetHeight - mask.offsetHeight) {
        y = small.offsetHeight - mask.offsetHeight;
    }

    mask.style.left = x + "px";
    mask.style.top = y + "px";

    var bili1 = bigImg.offsetWidth / small.offsetWidth;
    var bili2 = bigImg.offsetHeight / small.offsetHeight;
    var xx = bili1 * x;
    var yy = bili2 * y;


    bigImg.style.top = -yy + "px";
    bigImg.style.left = -xx + "px";


}

function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}