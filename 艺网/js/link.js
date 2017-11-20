
window.onload = function () {
        var imgArr = document.getElementsByTagName('img');
        for (var i = 0; i < imgArr.length; i++) {
            imgArr[i].onclick = function () {

                return function () {
                    var imgAddress = this.src;
                    // window.imgAddress = imgAddress;
                    location.href = 'magnify.html';

                }

            }();
        }

    window.imgAddress = imgAddress;
    }