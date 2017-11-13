/**
 * Created by anan on 2017/11/13.
 */
(function () {
    function Ball(w,h) {
        this.width = w || 40;
        this.height = h || 40;
        this.ballArr = [
            {left:0,top:0,bagkground:'red'},
            {left:400,top:0,bagkground:'green'},
            {left:400,top:400,bagkground:'blue'},
            {left:0,top:400,bagkground:'yellow'}
        ];
    }
    var arr = [];
    Ball.prototype.init = function (box) {

        removeBall(box);
        for (var i = 0; i < this.ballArr.length; i++) {
            var div = document.createElement('div');
            div.style.width = this.width + 'px' ;
            div.style.height = this.height + 'px';
            div.style.borderRadius = '50%';
            div.style.position = 'absolute';
            this.left = this.ballArr[i].left - this.width/2;
            this.top = this.ballArr[i].top - this.height/2;
            div.style.top=this.top + 'px';
            div.style.left=this.left + 'px';
            div.style.background=this.ballArr[i].bagkground;
            box.appendChild(div);
            arr.push(div);
        }
    }


    function removeBall(box) {
        for (var i = 0; i < arr.length; i++) {
            box.removeChild(arr[i]);
        }
        arr = [];
    }
   
    
    // Ball.prototype.ballMove = function (box) {
    //
    //     for (var i = 0; i < this.ballArr.length - 1; i++) {
    //         ballPosition(this.ballArr[i],this.ballArr[i+1])
    //     }
    //     console.log(this.ballArr);
    //
    //
    //
    //     this.init(box);
    // }

    Ball.prototype.ballRoll = function (box) {

        for (var i = 0; i < this.ballArr.length - 1; i++) {
            this.animate(this.ballArr[i],this.ballArr[i+1],box);
        }
        console.log(this.ballArr);



        // this.init(box);
    }
    
    function ballPosition(a,b) {
        var l = a.left;
        var t = a.top;
        a.left = b.left;
        a.top = b.top;
        b.left = l;
        b.top = t;
    }

    // Ball.prototype.ballChangeColor = function (box) {
        //逆时针
        // for (var i = 0; i < this.ballArr.length -1; i++) {
        //     changeColor(this.ballArr[i],this.ballArr[i+1]);
        // }

        //顺时针
        // for (var i = this.ballArr.length -1; i > 0; i--) {
        //     changeColor(this.ballArr[i],this.ballArr[i-1]);
        // }
        // this.init(box);
    // }
    // function changeColor(a,b) {
    //     var c = a.bagkground;
    //     a.bagkground = b.bagkground;
    //     b.bagkground = c;
    // }

    Ball.prototype.animate = function(ele,target,box) {
        clearInterval(ele.timer);

        ele.timer = setInterval(function () {
            // var stepx = target.left - ele.left > 0 ? 10 : -10;
            // var stepy = target.top - ele.top > 0 ? 10 : -10;
            var stepx = (target.left - ele.left)/10;
            var stepy = (target.top - ele.top)/10;
            ele.left = ele.left + stepx ;
            ele.top = ele.top + stepy ;
            if(ele.left == target.left && ele.top== target.top) {
                clearInterval(timer);
            }
        },200)
        
        this.init(box);
    }


    window.Ball = Ball;
})();
