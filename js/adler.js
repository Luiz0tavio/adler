/**         _____
 *       __/_ ///                      /\_/\
 *      / _/    \                     / - - \
 *      \/_\=[o=o]                   <_  X  _>  /\_/\
 *       \_,    __)                  /       \ <_o_o_>
 *        |     _\                  <_)_U_U_(_>
 *        l______/
 *       /     :|
 *      /  \   ;|-      @author   Luiz Otavio R Vasconcelos <luizotrv@gmail.com>
 *      \_______j                   ( https://github.com/Luiz0tavio )
 *      ./.....\..
 *                      @author   Hiago Souza
 */

(function mobilecheck () {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    if(check){
        window.location = "http://LuizOtav.io/";
    }
}());

/**
 * @namespace Adler
 */
var Adler = Adler || {};

/**
 * @class Adler.Game
 * @constructor
 */
Adler.Game = function () {

    /**
     * Instance of Phaser.Game
     * */
    this.instance = null;

    /**
     * @property {String} player_name - Object name.
     * */
    this.player_name = null;

    /**
     * @property {String} player_name - The name that will be displayed on top of player head.
     * */
    this.name = "Adlerito";

    /**
     * @property {Object} _stageName - Name of the Stages on Adler Game.
     * @private
     * */
    this._stageName = {
        menu: Adler.Game.Menu,
        devil: Adler.Game.Devil
    };

    /**
     * @property {Object} _activeStage - Active Adler Stage Object.
     * @private
     * */
    this._activeStage = null;

    /**
     * @property {Number} player_id - Player id from server.
     * */
    this.player_id = null;

    /**
     * @property {Phaser.Sprite} player - Player Object itself.
     * */
    this.player = null;

    /**
     * @property {Phaser.Sprite} devil - Devil Object itself.
     * */
    this.devil = null;

    /**
     * @property {Phaser.Sprite} devil - Devil Object itself.
     * */
    this.devil_slimes = [];

    /**
     * @property {Array} loaded_ids - Ids from server.
     * */
    this.loaded_ids = [];

    /**
     * @property {Array<Adler.MultiPlayers>} multi_players - Array with others players objects.
     * */
    this.multi_players = [];

    /**
     * @property {Number} player_type - Player type playable.
     * */
    this.player_type = Adler.Players.ADLER = 0;

    /**
     * @property {Boolean} connected - Player is connect with the server.
     * */

    this.ws = null;

    this.decors = null;
};

Adler.Game.prototype = {

    /**
     * Start the game on Menu Screen.
     * @method
     * */
    Start: function(){

        this._activeStage = new this._stageName.menu();
        this.instance = new Phaser.Game(800, 600, Phaser.AUTO, '', {
                preload: this._activeStage.preload.bind(this),
                create: this._activeStage.create.bind(this),
                update: this._activeStage.update.bind(this),
                render: function() {
                    this.instance.debug.text(this.instance.time.fps || '--', 2, 14, "#00ff00");
                }.bind(this)
            }, true, false
        );
        this.openConnection();
    },

    /**
     * Change Game Stage.
     * @param {String} stage - Stage name from array this._stageName
     * @method
     * */
    changeStage: function (stage) {

        if(stage !== undefined){
            this._activeStage = new this._stageName[stage]();
        }
        var devil_state = this.instance.state;
        devil_state.add(stage,{
            preload: this._activeStage.preload.bind(this),
            create : this._activeStage.create.bind(this),
            update: this._activeStage.update.bind(this),
            render: function() {
                this.instance.debug.text(this.instance.time.fps || '--', 2, 14, "#00ff00");
            }.bind(this)
        });

        devil_state.start(stage);
    },

    /**
     * Full Screen.
     * @method
     * */
    goFull: function() {
        if (this.instance.scale.isFullScreen) this.instance.scale.stopFullScreen();
        else this.instance.scale.startFullScreen(false);
    },

    /**
     * Screen setup.
     * @method
     * */
    setScreen: function () {
        this.instance.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.instance.scale.pageAlignVertically = true;
        this.instance.scale.pageAlignHorizontally = true;
        this.instance.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.fullScreen_text = this.instance.add.text(650,550,"FullScreen",  {fill : "#E22612", font: "20px Arial"});
        this.fullScreen_text.inputEnabled = true;
        this.fullScreen_text.events.onInputDown.add(this.goFull, this);
        this.fullScreen_text.fixedToCamera = true;
    },


    /**
     * Web Socket method.
     * Web Socket Constructor.
     * @method
     * */
    openConnection : function() {

        var host = location.origin == "http://localhost"
            ? "ws://localhost:3000"               // Dev
            : "wss://luizotavioapi.herokuapp.com"; // Prod

        this.ws = new WebSocket( host );
        this.ws.onerror = this.displayError.bind(this);
        this.ws.onopen = this.connectionOpen.bind(this);
        this.ws.onclose = this.connectionClose.bind(this);
    },

    /**
     * Web Socket method.
     * Try to open a connection with the server.
     * @method
     * */
    connectionOpen : function() {},

    /**
     * Web Socket method.
     * If cant connect, display console Err.
     * @method
     * */
    displayError : function(err) {
        console.error('Web Socket Error: ', err);
    },

    /**
     * Web Socket method.
     * Web Socket main method - Receive the messages.
     * @method
     * */
    onMessage : function(){},

    connectionClose: function(){},

    /**
     * Add Devil Boss.
     * @method
     * @TODO remove this from here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     * */
    addDevil : function (d){
        this.devil = this.instance.add.sprite(d.x, d.y, 'devil');
        this.devil.scale.setTo(2,2);

        this.instance.physics.arcade.enable(this.devil);
        this.devil.body.bounce.y = 0.3;
        this.devil.body.collideWorldBounds = true;
        this.devil.anchor.setTo(.5,.5);
        this.devil.animations.add('anim',null, 5, true);
        this.devil.animations.play('anim');
        this.instance.world.sendToBack(this.devil);
    },

    genereteTile: function(from, to, y, decor){
        this.platforms.create( from, y, 'tile_plat_left').body.immovable = true;
        var decor_img = null;
        for(var i=from+87; i< to; i += 128){
            this.platforms.create( i, y, 'tile_plat_middle').body.immovable = true;
            if( decor !== null ){
                decor_img = this.decors.create(i, y, decor);
                decor_img.y = y - decor_img.height;
                decor = null;
            }
        }
        if(decor != null){
            decor_img = this.decors.create(i-50, y, decor);
            decor_img.y = y - decor_img.height;
            decor = null;
        }
        this.platforms.create( i, y, 'tile_plat_right').body.immovable = true;
        this.instance.world.sendToBack( this.platforms);
    }
};

Adler.Game.prototype.constructor = Adler.Game;