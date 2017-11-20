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
        var radius = box.clientHeight / 2;
        var ballArr = [
            {angle: 0, bagkground: 'red'},
            {angle: 60, bagkground: 'green'},
            {angle: 120, bagkground: 'blue'},
            {angle: 180, bagkground: 'gray'},
            {angle: 240, bagkground: 'orange'},
            {angle: 300, bagkground: 'yellow'}
        ];

        for (var i = 0; i < ballArr.length; i++) {
            var div = document.createElement('div');
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.borderRadius = '50%';
            div.style.position = 'absolute';
            div.angle = ballArr[i].angle;
            var top = radius + radius * Math.sin(div.angle * Math.PI / 180) - this.height / 2;
            var left = radius + radius * Math.cos(div.angle * Math.PI / 180) - this.width / 2;
            div.style.top = top + 'px';
            div.style.left = left + 'px';
            div.style.background = ballArr[i].bagkground;
            box.appendChild(div);
            this.divArr.push(div);
        }
    };

    Ball.prototype.ballRoll = function (box) {
        var arr = this.divArr;
        for (var i = 0; i < arr.length; i++) {
            this.animate(box, arr[i]);
        }
    };

    Ball.prototype.animate = function (box, ele) {
        var radius = box.clientHeight / 2;
        var baseTop = radius - this.height / 2;
        var baseLeft = radius - this.width / 2;
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            ele.angle = ele.angle + 1;
            var top = baseTop + radius * Math.sin(ele.angle * Math.PI / 180);
            var left = baseLeft + radius * Math.cos(ele.angle * Math.PI / 180);
            ele.style.top = top + 'px';
            ele.style.left = left + 'px';
        }, 10);
    };

    window.Ball = Ball;
})();
