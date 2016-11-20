Adler.Game.Devil.prototype.update = function () {

    this.instance.physics.arcade.collide([this.adler_weapon.bullets, this.player, this.devil], this.platforms);
    this.instance.physics.arcade.overlap(this.player, this.devil, function(){
        // instance.state.restart();

    });

    this.instance.physics.arcade.overlap( this.devil, this.adler_weapon.bullets, function(devil, bullet){
        bullet.animations.play('explode');
    });

    this.instance.camera.follow(this.player);
    this.player.body.velocity.x = 0;

    if(this.player.frame == 2 && this.player.key == 'adler_hit'){
        this.adler_weapon.fireFrom.centerOn(this.player.x, this.player.y+10);
        this.adler_weapon.fire();
    }

    if(this.key_q.isDown){
        if(this.player.key == 'adler'){
            this.player.loadTexture('adler_hit');
        }
        this.player.animations.frameRate = 120;
        this.player.animations.play('anim');
    }
    if (this.cursors.left.isDown) {
        /*  Move to the left */
        if(this.player.scale.x > 0){
            this.player.scale.x *= -1;
        }
        this.player.body.velocity.x = -150;
        this.adler_weapon.fireAngle = 180;
        this.player.animations.play('anim');
    } else if (this.cursors.right.isDown) {
        /*  Move to the right */
        this.player.body.velocity.x = 150;
        if(this.player.scale.x < 0){
            this.player.scale.x *= -1;
        }
        this.adler_weapon.fireAngle = 0;
        this.player.animations.play('anim');
    } else {
        if(!this.key_q.isDown && (this.player.key != 'adler_hit') ) {
            this.player.animations.stop();
            this.player.frame = 0;
        }
    }


    /*  Allow the player to jump if they are touching the ground. */
    if (this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.body.velocity.y = -500;
    }

    this.player_name.x = this.player.x;
    this.player_name.y = this.player.y - 50;

    if ( this.connected /*&& (has_to_update || !player.body.touching.down) */)
        this.ws.send(
            JSON.stringify({
                id: this.player_id,
                x: this.player.x,
                y: this.player.y,
                devil:{
                    y: this.devil !== null ? this.devil.y : 80
                }
            })
        );
};