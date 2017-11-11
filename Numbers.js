/**
 * Created by anan on 2017/11/11.
 */
function Numbers() {
    this.init = function (box) {
        for (var i = 0; i < parseInt(Math.random() * 50); i++) {
            var ul = document.createElement('ul');
            var wordSize = getRandomIntInclusive(6, 14) * 2;
            var liLineHeight = (wordSize + 10);
            var width = (wordSize + 10);
            var ulLineHeight = (wordSize + 10) * 8;
            for (var j = 0; j < 8; j++) {
                var li = document.createElement('li');
                li.style.fontSize = wordSize + 'px';
                li.style.lineHeight = liLineHeight + 'px';
                li.innerHTML = parseInt(Math.random() * 10);
                li.style.top = j * 20 + 'px';
                ul.appendChild(li);
            }
            var top = Math.random() * (box.clientHeight - ulLineHeight);
            ul.offsetHeight.log
            var left = Math.random() * (box.clientWidth - width);

            if (left > box.clientWidth - width || top > box.clientHeight - ulLineHeight) {
                return;
            }
            ul.style.left = parseInt(left) + 'px';
            ul.style.top = parseInt(top) + 'px';
            box.appendChild(ul);

            animate(ul, (box.clientHeight - top));
        }
    }
}


function animate(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = target > ele.offsetTop ? Math.random() : -Math.random();
        ele.style.top = ele.offsetTop + step + "px";
        if (Math.abs(target - ele.offsetTop) <= Math.abs(step)) {
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    }, 1);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

