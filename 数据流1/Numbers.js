function DataStream(ulCount, liCount) {
    ulCount = ulCount || parseInt(getRandom(10, 30));
    liCount = liCount || parseInt(getRandom(10, 12));
    this.init = function (box) {
        for (var i = 0; i < ulCount; i++) {
            var ul = document.createElement('ul');
            var wordSize = parseInt(getRandom(12, 28));
            for (var j = 0; j < liCount; j++) {
                var li = document.createElement('li');
                li.style.fontSize = wordSize + 'px';
                li.innerHTML = parseInt(Math.random() * 10);
                li.style.lineHeight = wordSize + 'px';
                // li.style.paddingTop = '1px';
                ul.appendChild(li);
            }
            ul.style.width = wordSize + 'px';

            var top = Math.random() * (box.clientHeight);
            ul.style.top = top + 'px';

            var left = Math.random() * (box.clientWidth);
            ul.style.left = left + 'px';

            box.appendChild(ul);

            animate(ul, box.clientHeight);
        }
    };
}

function animate(ul, target) {
    clearInterval(ul.timer);
    clearInterval(ul.childTimer);
    var step = getRandom(0.5, 1);
    ul.timer = setInterval(function () {

        ul.style.top = ul.offsetTop + step + "px";
        if (Math.abs(target - ul.offsetTop) <= Math.abs(step)) {
            ul.style.top = target + "px";
            clearInterval(ul.timer);
            clearInterval(ul.childTimer);
        }
    }, 1);
    ul.childTimer = setInterval(function () {
        var liArray = ul.children;
        for (var i = 0;i < liArray.length;i++) {
            liArray[i].innerHTML = parseInt(Math.random() * 10);
        }
    }, 200);
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}