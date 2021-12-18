var flappy,flappyImg;
var ground, invisibleGround, groundImage;
var pipe1,pipe2,pipe3,pipe4,pipe5,pipe6,pipe1Img,pipe2Img;
var invisLaunchOb;
var restart,restartImg;
var score;


function preload(){
  flappyImg = loadImage("flappy.png");
  groundImage = loadImage("ground.jpeg");
  
  pipe1Img = loadImage("pipe1.png");
  pipe2Img = loadImage("pipe2.png");
  restartImg = loadImage("restart.png");

  
}

function setup() {

  createCanvas(600,300)
    //create a ground sprite
    ground = createSprite(200,-60,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /9;
    ground.velocityX = -6;
    ground.scale=0.8;

  //create a flappy bird sprite
  flappy = createSprite(50,1,20,50);
  flappy.addImage("flappy", flappyImg);
  flappy.scale=0.055;

     //create obstacles
     pipe1 = createSprite(600, Math.round(random(-50, -150)), 30, 30);
     pipe1.addImage("pipe1", pipe1Img);
     pipe1.scale = 0.5;
     pipe1.velocityX = -3;
     pipe2 = createSprite(600, pipe1.y + Math.round(random(475, 485)), 30, 30);
     pipe2.addImage("pipe2", pipe2Img);
     pipe2.scale = 0.5;
     pipe2.velocityX = -3;
     pipe3 = createSprite(600, Math.round(random(-50, -150)), 30, 30);
     pipe3.addImage("pipe1", pipe1Img);
     pipe3.scale = 0.5;
     pipe3.visible=false;
     pipe4 = createSprite(600, pipe3.y + Math.round(random(475, 485)), 30, 30);
     pipe4.addImage("pipe2", pipe2Img);
     pipe4.scale = 0.5;
     pipe4.visible=false;
     pipe5 = createSprite(600, Math.round(random(-50, -150)), 30, 30);
     pipe5.addImage("pipe1", pipe1Img);
     pipe5.scale = 0.5;
     pipe5.visible=false;
     pipe6 = createSprite(600, pipe5.y + Math.round(random(475, 485)), 30, 30);
     pipe6.addImage("pipe2", pipe2Img);
     pipe6.scale = 0.5;
     pipe6.visible=false;

     invisLaunchOb = createSprite(300,10,30,30)
     invisLaunchOb.visible=false;

     
     score = 0;
     
  //creating invisible ground
  invisibleGround = createSprite(200,270,400,10);
  invisibleGround.visible = false;
}



function draw() {
  //set background color
  background("white");

  // jump when the space key is pressed
  if(keyDown("space")||keyDown(UP_ARROW)||onmousedown) {
    flappy.velocityY = -7;
  }


  flappy.velocityY = flappy.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/3 ;
  }

if(flappy.y<7)
{
    flappy.y=7;
}
if(flappy.isTouching(pipe1)||flappy.isTouching(pipe2)||flappy.isTouching(pipe3)||flappy.isTouching(pipe4)||flappy.isTouching(pipe5)||flappy.isTouching(pipe6)||flappy.isTouching(invisibleGround))
{
  flappy.velocityY=0;
  pipe1.velocityX=0;
  pipe2.velocityX=0;
  pipe3.velocityX=0;
  pipe4.velocityX=0;
  pipe5.velocityX=0;
  pipe6.velocityX=0;
  ground.velocityX=0;
  restart = createSprite(300,150);
  restart.addImage("restart",restartImg);
  restart.scale=0.5;
  pipe1.destroy();
  pipe2.destroy();
  pipe3.destroy();
  pipe4.destroy();
  pipe5.destroy();
  pipe5.destroy();
  pipe6.destroy();
}

if(pipe1.isTouching(invisLaunchOb))
{
  pipe3.visible=true;
  pipe4.visible=true;
  pipe3.velocityX = -3;
  pipe4.velocityX = -3;
}
if(pipe3.isTouching(invisLaunchOb))
{
  pipe5.visible=true;
  pipe6.visible=true;
  pipe5.velocityX = -3;
  pipe6.velocityX = -3;
}
if(pipe5.isTouching(invisLaunchOb))
{
  pipe1.visible=true;
  pipe2.visible=true;
  pipe1.velocityX = -3;
  pipe2.velocityX = -3;
}
if(pipe1.x<0)
{
  pipe1.velocityX=0;
  pipe2.velocityX=0;
  pipe1.visible=false;
  pipe2.visible=false;
  pipe1.x=600
  pipe1.y=Math.round(random(-50, -150))
  pipe2.x=600
  pipe2.y=pipe1.y + Math.round(random(475, 485))
}
if(pipe3.x<0)
{
  pipe3.velocityX=0;
  pipe4.velocityX=0;
  pipe3.visible=false;
  pipe4.visible=false;
  pipe3.x=600
  pipe3.y=Math.round(random(-50, -150))
  pipe4.x=600
  pipe4.y=pipe3.y + Math.round(random(475, 485))
}
if(pipe5.x<0)
{
  pipe5.velocityX=0;
  pipe6.velocityX=0;
  pipe5.visible=false;
  pipe6.visible=false;
  pipe5.x=600
  pipe5.y=Math.round(random(-50, -150))
  pipe6.x=600
  pipe6.y=pipe5.y + Math.round(random(475, 485))
}

if(pipe1.x==30||pipe2.x==30||pipe3.x==30||pipe4.x==30||pipe5.x==30||pipe6.x==30)
{
  score=score+1;
}
if(mousePressedOver(restart))
{
  window.location.reload();
}
  flappy.collide(invisibleGround);
  drawSprites();
  fill("black")
  textSize(30);
  text("Score: "+score,245,30);
}

function mouseClicked()
{
  flappy.velocityY = -7;
}
window.addEventListener('touchstart', function() {
 flappy.velocityY = -7;
});

 window.addEventListener('touchstart', function(restart) {
  window.location.reload();
 });

