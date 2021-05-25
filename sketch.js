var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var bg,snow


function preload(){
   bg=loadImage("snow3.jpg")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  Engine.update(engine)
}

function draw() {
  background(bg);  

  
  if(frameCount%60===0){
    snow.push(new Snow(random(0,800),10,10));
    snow.velocityX=2
  }

 //display the snow
  for (var k = 0; k > 0; k++) {
   snow[k].display();
  
    }
  drawSprites();
}