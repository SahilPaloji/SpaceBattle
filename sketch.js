var bg, enemy1,enemy2,boss,spacewar ;
var enemyImage1, enemyImage2, bossImage,  MaincraftImage,
backgroundImage;
var laser, laserImg;
var score = 0;



function preload(){
  
  backgroundImage = loadImage("SpaceWar.jpg");
  enemyImage1 = loadImage("EnemySpaceCraft1.png");
  enemyImage2 = loadImage("EnemySpaceCraft2.png");
  bossImage = loadImage("Boss.png");
  MaincraftImage= loadImage("MainCraft.png");
  laserImg = loadImage("laser.png")
  
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  bg = createSprite(0,0,400,400);
  bg.addImage(backgroundImage);
  bg.scale = 2.5
  
  // creating bow to shoot arrow
  Maincraft = createSprite(200,300,20,50);
  Maincraft.addImage( MaincraftImage); 
  Maincraft.scale = 0.1;

  
  
    
}

function draw() {
 background(0);
  // moving ground
    bg.velocityY = -3 

    if (bg.y < 0){
      bg.y = bg.height/2;
   }
  
  
   
  //creating continous enemies
  var select_craft = Math.round(random(1,3));
  
  if (World.frameCount % 100 == 0) {
    if (select_craft == 1) {
      enemy1();
    } else if (select_craft == 2) {
      enemy2();
    } else if (select_craft == 3) {
      enemy3();
    } 
  }  

  if(keyDown(RIGHT_ARROW)){
    Maincraft.x = Maincraft.x +3;

  }

  if(keyDown(LEFT_ARROW)){
    Maincraft.x = Maincraft.x -3;
  }

  if(keyDown("space")){
     var cLaser = createLaser();
    // cLaser.x = Maincraft.x;  
    
   }
   

    
  drawSprites();

  textSize(20);
   stroke("red");
   strokeWeight("white");
  text("score : 0",30,50);
}



function enemy1() {
  var ene1 = createSprite(Math.round(random(20, 370)),0, 10, 10);
  ene1.addImage(enemyImage1);
  ene1.velocityY = 3;
  ene1.lifetime = 150;
  ene1.scale = 0.1;
}

function enemy2() {
  var ene2 = createSprite(Math.round(random(40, 370)),0, 10, 10);
  ene2.addImage(enemyImage2);
  ene2.velocityY = 3;
  ene2.lifetime = 150;
  ene2.scale = 0.1;
}

function enemy3() {
  var ene3 = createSprite(Math.round(random(60, 370)),0, 10, 10);
  ene3.addImage(bossImage);
  ene3.velocityY= 3;
  ene3.lifetime = 150;
  ene3.scale = 0.1;
}

function createLaser(){

  laser = createSprite(Maincraft.x,Maincraft.y,10,10);
  laser.addImage(laserImg);
  laser.scale = 0.1;

  laser.velocityY = -2;
  return laser;

}

