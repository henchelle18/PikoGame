var about = {
    preload : function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
        game.load.spritesheet("menu","image/menu.png",100,100);
        game.load.image("bg1","image/wacky.jpg");  
    },
    create: function () {
    game.add.image(0, 0, 'bg');
    wacky=game.add.image(200,5,'bg1');
    wacky.scale.x=.5;
    wacky.scale.y=.6;
	menu = game.add.button(10,10,"menu",Menu);
    game.add.text(220,400,'NAME: Henry O. Evangelista\nSECTION: BSIT-3A\nStudent From:\nPangasinan State University\nLingayen Campus',{fill:"white",font:"20px stencil"});
		}
};
function Menu(){
		game.state.add("Game" ,Game, true);
		
		
	}
game.state.add("about" ,about, false);