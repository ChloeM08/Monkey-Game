
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey = createSprite (80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(600, 395, 1200, 20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white");
  
if(keyDown("space")&& monkey.y >= 161) {
  monkey.velocityY = -12;
  
  
}
  
  
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  food();
  obstacle();
  
  var survivalTime=0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  drawSprites();
}

function food(){

  if (World.frameCount % 80 === 0) {
    
     banana = createSprite(600, 180, 20, 20);
     banana.addImage("banana", bananaImage);
     
     banana.velocityX = -3;
    banana.scale = 0.1;
     
    bananaGroup.add(banana);
    
  }

}
function obstacle(){
  
   if (World.frameCount % 300 === 0) {
    var obstacle = createSprite(600, 380, 10, 40);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
     
     obstacleGroup.add(obstacle);
     
   }
}




