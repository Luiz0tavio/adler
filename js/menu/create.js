Adler.Game.Menu.prototype.create = function () {

    /* Plugins */
    this.instance.add.plugin(Fabrique.Plugins.InputField);

    /* Screen Set */
    this.setScreen();

    var select_player = this.instance.add.graphics();
    select_player.beginFill(0xFF0000, 1);
    select_player.drawCircle(350, 450, 100);

    this.adler = this.instance.add.sprite(300, 400, 'adler');
    this.adler.scale.setTo(2);
    this.adler.animations.add('walk', [1, 2, 3, 4, 5, 6, 7, 8], 10);

    this.adler.inputEnabled = true;
    this.adler.events.onInputDown.add(function(){
        this.player_type = Adler.Players.ADLER;
        select_player.clear();
        select_player.beginFill(0xFF0000, 1);
        select_player.drawCircle(350, 450, 100);
    }.bind(this));


    this.marina = this.instance.add.sprite(450, 400, 'marina');
    this.marina.scale.setTo(2);
    this.marina.animations.add('walk', [1, 2, 3, 4, 5, 6, 7, 8], 10);

    this.marina.inputEnabled = true;
    this.marina.events.onInputDown.add(function(){
        this.player_type = Adler.Players.MARINA;
        select_player.clear();
        select_player.beginFill(0xFF0000, 1);
        select_player.drawCircle(500, 450, 100);
    }.bind(this));

    this.instance.add.text(100,300,"Nome:", {fill : "#fff"});
    this.instance.add.text(100,430,"Selecione:", {fill : "#fff"});

    var input = this.instance.add.inputField(250, 300, {
        font: '18px Arial',
        fill: '#212121',
        fontWeight: 'bold',
        width: 300,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        placeHolder: 'Adlerito'
    });
    input.value = "Adlerito";

    var start = this.instance.add.text(650,400,"Start >", {fill : "#0f0"});
    start.inputEnabled = true;

    start.events.onInputDown.add(function(){
        this.marina.destroy();
        this.adler.destroy();
        delete this.marina;
        delete this.adler;
        this.changeStage("devil");
        this.name = input.value;
    }.bind(this));


    this.instance.stage.disableVisibilityChange = true;
};
