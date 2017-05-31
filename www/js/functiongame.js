playGame = {
 preload: function() {
 
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
            game.load.image("bg", 'image/bg2.png');
            game.load.image("court", 'image/court1.png');
            game.load.image("court1", 'image/court1.png');
            game.load.image("court2", 'image/court1.png');
            game.load.image("court3", 'image/court1.png');
            game.load.image("court4", 'image/court2.png');
            game.load.image("court5", 'image/court1.png');
            game.load.image("court6", 'image/court1.png');
            game.load.image("court7", 'image/court3.png');
            game.load.image("retry","image/retry.png");
            game.load.spritesheet("man",'image/Man.png',140,264.6);
            game.load.spritesheet("man1",'image/Man.png',140,264.6);
            game.load.spritesheet("DF",'image/DF.png',100,100);
            game.load.spritesheet("LFJ",'image/LFJ.png',100,100);
            game.load.spritesheet("RFJ",'image/RFJ.png',100,100);
            game.load.spritesheet("TC",'image/TC.png',100,100);
            game.load.spritesheet("PC",'image/PC.png',100,100);
            game.load.spritesheet("PLAY",'image/PLAY.png',112,100);
            game.load.spritesheet('menu','image/Menu1.png',100,100);
     },
 create: function() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.add.image(0, 0, 'bg');

              court=game.add.sprite(350, 335,'court',Court); 
              court.scale.x=.9;
              court.scale.y=.9;
              court1=game.add.sprite(350, 275,'court1',Court1); 
              court1.scale.x=.9;
              court1.scale.y=.9;
              court2=game.add.sprite(400, 210,'court2',Court2); 
              court2.scale.x=1;
              court2.scale.y=1;
              court3=game.add.sprite(280, 210,'court3',Court3); 
              court3.scale.x=1;
              court3.scale.y=1;
              court4=game.add.sprite(350, 145,'court4',Court4); 
              court4.scale.x=.9;
              court4.scale.y=.9;
              court5=game.add.sprite(400, 78,'court5',Court5); 
              court5.scale.x=1;
              court5.scale.y=1;
              court6=game.add.sprite(280, 78,'court6',Court6); 
              court6.scale.x=1;
              court6.scale.y=1;
              court7=game.add.sprite(284, 5,'court7',Court7); 
              court7.scale.x=.9;
              court7.scale.y=.9;

              man= game.add.sprite(370,490,'man');
              man.scale.x=.4;
              man.scale.y=.3;
              AI = game.add.sprite(370,50,"man1");
              AI.animations.add('walk-down',[7,8,9,10,11,12,13],8,true);
              AI.animations.add('walk-up',[0,1,2,3,4,5,6],8,true);
              AI.scale.x = .4;
              AI.scale.y = .4;
              
              DF= game.add.button(80,360,"DF",df);
              DF.scale.x=.7;
              DF.scale.y=.7;
              LFJ= game.add.button(20,430,"LFJ",lfj);
              LFJ.scale.x=.7;
              LFJ.scale.y=.7;
              RFJ= game.add.button(140,430,"RFJ",rfj);
              RFJ.scale.x=.7;
              RFJ.scale.y=.7;
              TC= game.add.button(600,430,"TC",tc);
              TC.scale.x=.7;
              TC.scale.y=.7;
              PC= game.add.button(700,430,"PC",pc);
              PC.scale.x=.7;
              PC.scale.y=.7;
              PLAY= game.add.button(650,25,"PLAY",pause);
              PLAY.scale.x=.7;
              PLAY.scale.y=.8;
              menu=game.add.button(30, 100, 'menu',Menu);
              menu.scale.x=.6;
              menu.scale.y=.6;
              game.physics.arcade.enable(court);
              game.physics.arcade.enable(court1);
              game.physics.arcade.enable(court2);
              game.physics.arcade.enable(court3);
              game.physics.arcade.enable(court4);
              game.physics.arcade.enable(court5);
              game.physics.arcade.enable(court6);
              game.physics.arcade.enable(court7);
               game.physics.arcade.enable(man);
                man.body.collideWorldBounds = true;
              game.camera.follow(man,Phaser.Camera.FOLLOW_TOPDOWN);   
              court.body.immovable = true;
              court1.body.immovable = true;
              court2.body.immovable = true;
              court3.body.immovable = true;
              court4.body.immovable = true;
               court5.body.immovable = true;
                court6.body.immovable = true;
                 court7.body.immovable = true;
             Score = game.add.text(25,20,'Score:',{fill:"red",font:" 30px Algerian"});
             Player1 = game.add.text(30,50,'Player1:',{fill:"black",font:" 20px Algerian"});  
             Player2 = game.add.text(30,75,'Player2:',{fill:"black",font:" 20px Algerian"});
            bestScoreText = game.add.text(600,85,'Best: '+getScore(),{fill:"blue",font:"bold 25px Calibri Body "});
            gameOverText = game.add.text(250,200,'',{fill:"red",font:"Bold 50px Calibri Body Center"});
            game.physics.arcade.enable(AI);
            AI.body.collideWorldBounds = true;

 },

update: function() {
      game.physics.arcade.overlap(AI,man,killman)
      game.physics.arcade.overlap(man,court,Court);
      game.physics.arcade.overlap(man,court1,Court1);
      game.physics.arcade.overlap(man,court2,Court2);
      game.physics.arcade.overlap(man,court3,Court3);
      game.physics.arcade.overlap(man,court4,Court4);
      game.physics.arcade.overlap(man,court5,Court5);
      game.physics.arcade.overlap(man,court6,Court6);
      game.physics.arcade.overlap(man,court7,Court7);

      AI.animations.play("walk-down");
     AI.body.velocity.y = 40;
                }

};
var a = 0 ;
function Court(man,court)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function Court1(man,court1)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function Court2(man,court2)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function Court2(man,court2)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function Court3(man,court3)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function Court4(man,court4)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function Court5(man,court5)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function Court6(man,court6)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function Court7(man,court7)
{
  a = a+1; 
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    Score.text = "Score: " +a;
}
function killman(AI,man){
    man.kill();
    if(getScore()<=a){
        saveScore(a);
        bestScoreText.text = "Best: "+a;
    }
    gameOverText.text = "Game Over!!!!!! \n CLICK to Restart";
    game._paused = true;
    next = game.add.button(350,320,"retry",next);
    next.scale.x=.5;
    next.scale.y=.5;
    game.input.onTap.addOnce(play,game);

}
function saveScore(Score) {
    localStorage.setItem("gameScore",Score);
}


function getScore(){
    return (localStorage.getItem("gameScore") == null || localStorage.getItem("gameScore") == "")?0:localStorage.getItem("gameScore");
}

function pause(){
  PLAY.frame =0;
{game._paused = true;}
  PLAY.frame =1;
  game.input.onTap.addOnce(play,game);
}
function play(){
{game._paused = false;
}
PLAY.frame =0;
}

function df()
{
   man.animations.add('walk-up',[0,0],0,true);
  man.animations.play("walk-up")
  {DF.frame=1}  
setTimeout(function(){
    
DF.frame=0;
},500);
}
function lfj()
{
  man.animations.add('walk-up',[1,2],0,true);
  man.animations.play("walk-up")
  man.body.velocity.y = -speed;
  {LFJ.frame=1}  
setTimeout(function(){
    
LFJ.frame=0;
},500);
}
function rfj()
{
  man.animations.add('walk-down',[7,8],0,true);
  man.animations.play("walk-down")
            man.body.velocity.y = speed;
            
  {RFJ.frame=1}  
setTimeout(function(){
    
RFJ.frame=0;
},500);
}
function tc()
{
  {TC.frame=1}  
setTimeout(function(){
    
TC.frame=0;
},500);
}
function pc()
{
{PC.frame=1}  
setTimeout(function(){
    
PC.frame=0;
},500);

}
function Menu()
{
{menu.frame=1}  
setTimeout(function(){
    game.state.add("Game" ,Game, true);
menu.frame=0;
},500);

}
function next(){
  window.location.href=window.location.href;
  game.state.start("playGame" ,playGame, true);
  
        }

game.state.add("playGame" ,playGame, false);
game.state.add("Game" ,Game, false);