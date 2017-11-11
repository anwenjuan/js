/**
 * Created by anan on 2017/11/11.
 */
function Numbers() {
    this.init = function (box) {
        for (var i = 0; i < parseInt(Math.random() * 50); i++) {
            var ul = document.createElement('ul');
            var wordSize = getRandomIntInclusive(6, 14) * 2;
            var liHeight = wordSize;
            for (var j = 0; j < 8; j++) {
                var li = document.createElement('li');
                li.style.fontSize = wordSize + 'px';
                li.innerHTML = parseInt(Math.random() * 10);
                li.style.lineHeight = liHeight + 'px';
                li.style.paddingTop = '2px';
                ul.appendChild(li);
            }
            ul.style.width = wordSize + 'px';
            var top = Math.random() * (box.clientHeight);

            var left = Math.random() * (box.clientWidth);
            ul.style.left = left + 'px';
            ul.style.top = top + 'px';
            box.appendChild(ul);
            animate(ul, box.clientHeight);
        }
    }
}


function animate(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = Math.random();
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
