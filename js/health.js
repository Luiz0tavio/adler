var Health = function(adler_inheritance){
    this.prototype = adler_inheritance;
    this.widthLife = null;
    this.totalLife = 200;
    this.life = null;
};

Health.prototype.cropLife = function(){

    if(this.widthLife.width <= 3){
        this.prototype.devil = null;
        this.prototype.ws.close();
        this.prototype.changeStage("menu");
        this.widthLife.width = this.totalLife;
    } else {
        var life = (this.widthLife.width - (this.totalLife / 10));
        if(life <= 3){
            life = 3;
            var fatal = this.prototype.instance.add.text(130, 43, "Fatal", { font: "11px Arial", fill: "#ff0044", align: "center" });
            fatal.fixedToCamera = true;
        }
        this.prototype.instance.add.tween(this.widthLife).to( { width: life }, 1000, "Quint", true);
    }
};


Health.prototype.createHealthBar = function(x, y, w, h, flip){
    var bmd = this.prototype.instance.add.bitmapData(w, h); //300 40
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 300, 80);
    bmd.ctx.fillStyle = '#333333';
    bmd.ctx.fill();

    var bglife = this.prototype.instance.add.sprite(0, 0, bmd);
    bglife.anchor.set(0.5);

    bmd = this.prototype.instance.add.bitmapData(w - (h/2), h - (h/4)); // 280 30
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 300, 80);
    var grad = bmd.ctx.createLinearGradient(0,0,200,0);
    grad.addColorStop(0, "red");
    grad.addColorStop(0.5, "yellow");
    grad.addColorStop(1, "green");
    bmd.ctx.fillStyle = grad;
    bmd.ctx.fill();

    this.widthLife = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
    this.totalLife = bmd.width;

    var life = this.prototype.instance.add.sprite(0, 0, bmd);
    life.anchor.y = 0.5;

    life.cropEnabled = true;
    life.crop(this.widthLife);

    bglife.fixedToCamera = true;

    if(flip){
        life.scale.x *= -1;
        bglife.anchor.x = -0.5;
        bglife.scale.x *= -1;
        bglife.cameraOffset.setTo(x + 160, y);
    }else{
        bglife.cameraOffset.setTo(x + (w/2) - (h/4), y);

    }
    life.fixedToCamera = true;
    life.cameraOffset.setTo(x, y);

    this.life = life;
};