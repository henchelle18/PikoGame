var Game = {
 preload: function() {
 
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;

            game.load.image("bg", 'image/bg1.png');
            game.load.spritesheet("start",'image/start.png',100,100);
            game.load.spritesheet("bp",'image/bestplayer.png',100,100);
            game.load.spritesheet("about",'image/about.png',100,100);
            game.load.spritesheet("exit",'image/exit.png',100,100);
            game.load.spritesheet("sound",'image/sounds.png',100,100);
},
 create: function() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.add.image(0, 0, 'bg'); 
             game.add.button(350, 100, 'start', this.startGame, this);
              bp= game.add.button(350,200,"bp",process.bestplayer);
              sound = game.add.button(350,300,"sound",process.sound);
              about = game.add.button(650,400,"about",process.about);
              exit= game.add.button(50,400,"exit",Exit);
        },

startGame: function () {
  game.state.start('playGame');
    }
}; game.state.add("playGame" ,playGame, false);
function Exit(){
  window.location.href=window.location.href;
}