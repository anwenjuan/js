window.onload = function () {
    var imgArr = document.getElementsByTagName('img');
    for (var i = 0; i < imgArr.length; i++) {
        imgArr[i].onclick = function () {
            //FIXME ? 为什么原先的写法是retrun function
            var imgAddress = encodeURIComponent(this.src);
            console.log(imgAddress);
            location.href = 'magnify.html?src=' + imgAddress;
        }
    }
};