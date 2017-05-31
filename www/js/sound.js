var sound = {

    preload : function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.load.spritesheet("check","image/check.png",50,50);
		game.load.spritesheet("ex","image/ex.png",50,50);
        game.load.spritesheet("menu","image/menu.png",100,100);
		
    },

    create: function () {
    game.add.image(0, 0, 'bg');
	
	play = game.add.button(250,250,"check",Play);
	play.scale.x=1.5;
	play.scale.y=1.5;
	ex = game.add.button(500,250,"ex",mute);
	ex.scale.x=1.5;
	ex.scale.y=1.5;
	menu = game.add.button(10,10,"menu",Menu);
  
  game.add.text((w/2)-140,h/2-50,'Enable Sounds?',{fill:"YellowGreen",font:"40px Algerian"});
	}

};
function Play()
{
  {play.frame=1}  
setTimeout(function(){
    
play.frame=0;
},500);
}

function mute(){
ex.frame =1;
{
}
setTimeout(function(){
ex.frame=0;
},1000)
}
game.state.add("sound" ,sound, false);