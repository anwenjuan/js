/**
 * Created by anan on 2017/11/13.
 */
(function () {
    function Ball(w, h) {
        this.width = w || 40;
        this.height = h || 40;
        this.divArr = [];
    }

    Ball.prototype.init = function (box) {
        var ballArr = [
            {left: 0, top: 0, bagkground: 'red'},
            {left: 400, top: 0, bagkground: 'green'},
            {left: 400, top: 400, bagkground: 'blue'},
            {left: 0, top: 400, bagkground: 'yellow'}
        ];
        for (var i = 0; i < ballArr.length; i++) {
            var div = document.createElement('div');
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.borderRadius = '50%';
            div.style.position = 'absolute';
            var top = ballArr[i].top - this.height / 2;
            var left = ballArr[i].left - this.width / 2;
            div.style.top = top + 'px';
            div.style.left = left + 'px';
            div.style.background = ballArr[i].bagkground;
            box.appendChild(div);
            this.divArr.push(div);
        }
    };

    Ball.prototype.ballRoll = function () {
        var arr = this.divArr;
        for (var i = 0; i < arr.length; i++) {
            var target = {
                left: arr[(i + 1) % arr.length].offsetLeft,
                top: arr[(i + 1) % arr.length].offsetTop
            };
            this.animate(arr[i], target);
        }
    };

    Ball.prototype.animate = function (ele, target) {
        clearInterval(ele.timer);

        var stepx = (target.left - ele.offsetLeft) / 100;
        var stepy = (target.top - ele.offsetTop) / 100;
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft + stepx + 'px';
            ele.style.top = ele.offsetTop + stepy + 'px';
            if (ele.offsetLeft === target.left && ele.offsetTop === target.top) {
                clearInterval(ele.timer);
            }
        }, 20);
    };

    window.Ball = Ball;
})();
