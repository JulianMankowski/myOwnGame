var canvas, backgroundImage;
var shockwavestand
var cybertronimg
var question, contestant, quiz;
var shockwave,shockwaveimg
var shockwavejump
var shockwavejumping
var jumping,jump
var invisibleground
function preload(){
shockwaveimg=loadAnimation("shockwave1.png","shockwave2.png","shockwave3.png")
cybertronimg=loadImage("cybertronimg.jpeg")
shockwavestand=loadImage("shockwavestand.png")
shockwavejump=loadImage("shockwavejump1.png")
shockwavejumping=loadAnimation("shockwavejump1.png","shockwavejump2.png","shockwavejump3.png")
}
function setup(){
  canvas = createCanvas(850,400);
  shockwave=createSprite(200,300,40,40)
  shockwave.addAnimation("stand",shockwavestand)
  shockwave.addAnimation("walking",shockwaveimg)
  shockwave.addAnimation("jumping",shockwavejumping)
  invisibleground=createSprite(425,390,850,10)
  invisibleground.visible=false
}


function draw(){
  background(cybertronimg);
  if (keyWentDown(RIGHT_ARROW)) {
    //shockwave.x+=5
    shockwave.velocityX=5
    shockwave.changeAnimation("walking")
  }
  if (keyWentUp(RIGHT_ARROW)) {
    shockwave.changeAnimation("stand")
    shockwave.velocityX=0
  }
  if (keyWentDown(LEFT_ARROW)) {
    //shockwave.x-=5
    shockwave.rotation=360
    shockwave.velocityX=-5
    shockwave.changeAnimation("walking")
  }
  if (keyWentUp(LEFT_ARROW)) {
    shockwave.changeAnimation("stand")
    shockwave.velocityX=0
    }
  if (keyWentDown(UP_ARROW)&&shockwave.y>300) {
    shockwave.velocityY=-12
    shockwave.changeAnimation("jumping")
  }
  if (keyWentUp(UP_ARROW)) {
    shockwave.changeAnimation("stand")
  }
  shockwave.collide(invisibleground)
  shockwave.velocityY+=0.8
  console.log(shockwave.y)
  //shockwave.changeAnimation("stand")
 drawSprites()
}

  

