(function () {
    function Play() {
        this.stream = new Numbers('green',10,12);

    }
    
    Play.prototype.start = function (box) {
        this.stream.init(box);
        var stream = this.stream;
        setInterval(function () {
            stream.init(box);
        },5000)
    }


    
    window.Play = Play;
})();
