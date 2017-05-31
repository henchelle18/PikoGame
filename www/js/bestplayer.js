var bestplayer = {
    preload : function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
        game.load.spritesheet("menu","image/menu.png",100,100);    
    },
    create: function () {
    game.add.image(0, 0, 'bg');
	menu = game.add.button(10,400,"menu",Menu);
    game.add.text(300,100,'"BEST PLAYER"',{fill:"yellowgreen",font:"Italic 40px Algerian"});
    game.add.text(200,175,'HIGHEST SCORE',{fill:"white",font:" bold 20px Time New Roman"});
    game.add.text(200,225,'Player1: 0',{fill:"white",font:" bold 20px Time New Roman"});
    game.add.text(200,275,'Player2: 0',{fill:"white",font:"bold 20px Time New Roman"});
		}       
};
function Menu(){
		game.state.add("Game" ,Game, true);
		
		
	}
game.state.add("bestplayer" ,bestplayer, false);