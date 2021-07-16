const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var kid, kidImg;
var ground;

function preload() {
    backgroundImg = loadImage("snow1.jpg");
    kidImg = loadImage("pngwing.com.png");
}

function setup(){
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  kid = createSprite(400,200,50,50);
  kid.addImage(kidImg);
  edges= createEdgeSprites();
  kid.scale = 0.4;
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    drawSprites();
     kid.velocityX = 0;
    if(keyIsDown(UP_ARROW)){
      kid.velocityY = -8;
    }
    if(keyIsDown(LEFT_ARROW)){
      kid.velocityX = -5;
    }
    if(keyIsDown(RIGHT_ARROW)){
      kid.velocityX = 5;
    }
    kid.velocityY +=0.5;
    kid.collide(edges[3]);

    createSnow();
}

function createSnow(){
  if(frameCount % 20 === 0) {
  var snow, snowAnimation;
  snowAnimation = loadImage("snow4.webp");
  snow = createSprite(random(100,700),1,20,20)
  snow.addImage("snow",snowAnimation);
  snow.scale = 0.1;
  snow.velocityY = 2;
  }
}