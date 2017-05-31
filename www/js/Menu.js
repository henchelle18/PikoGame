var Menu = {

    preload : function() {
        game.load.image('bg', 'image/bg.png');
        game.load.spritesheet('menu','image/menu.png',100,100);
        game.load.spritesheet('exit','image/exit1.png',100,100);
        
        
    },

    create: function () {
    game.add.image(0, 0, 'bg');
             game.add.button(650, 400, 'menu', this.startGame, this);
             exit = game.add.button(50,400,"exit",Exit);
    },

   
    startGame: function () {
        game.state.start('Game');

    }


};
 function Exit(){
     exit.frame =0;{
    return 'Are you sure you want to quit?';
}
window.onbeforeunload = myConfirmation;
    exit.frame =1;
}