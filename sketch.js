var trex,walk,ground,floor,ground2,obs1,obs2,obs3,obs4,obs5,obs6;
var score = 0
function preload(){
  walk = loadAnimation("trex1.png","trex3.png","trex4.png")
  floor = loadImage("ground2.png")
  cloud1 = loadImage("cloud.png")
  obs1 = loadImage("obstacle1.png")
  obs2 = loadImage("obstacle2.png")
  obs3 = loadImage("obstacle3.png")
  obs4 = loadImage("obstacle4.png")
  obs5 = loadImage("obstacle5.png")
  obs6 = loadImage("obstacle6.png")
  
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,180,50,50);
  trex.addAnimation("VOLK",walk)
  trex.scale = 0.5;
  ground =createSprite(300,180,600,20)
  ground.addImage(floor)
  ground2 = createSprite(300,190,600,20)
  ground2.visible=false
}
function draw(){
  background (180)
  //Concatenation
  text("Score: "+score,530,30)
  console.log(getFrameRate())
  score = score + Math.round(getFrameRate()/60);
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground2)
  if (keyDown("space") && trex.y>=156){
    trex.velocityY = -10
  }
  drawSprites();
  ground.velocityX = -5
  if (ground.x < -1530.5){
    ground.x = 2280
  }
  if (frameCount%60===0){
    clouds();
  }
  if (frameCount%70===0){
    obstacles();
  }
}

function clouds(){
  var cloud = createSprite(650,random(30,100),10,10);
  cloud.velocityX = -5;
  cloud.addImage(cloud1)
  cloud.scale = 0.75;
  trex.depth = cloud.depth + 1;
  cloud.lifetime = 150;
}
function obstacles(){
 var obs = createSprite(650,165,10,10)
 obs.velocityX = -5
 switch (Math.round(random(1,6))){
   case 1 : obs.addImage(obs1)
   break;
   case 2 : obs.addImage(obs2)
   break;
   case 3 : obs.addImage(obs3)
   break;
   case 4 : obs.addImage(obs4)
   obs.y = 160
   break;
   case 5 : obs.addImage(obs5)
   obs.y = 160
   break;
   case 6 : obs.addImage(obs6)
   obs.y = 160;
   break; 
 }
 obs.scale = 0.5;
 obs.lifetime = 140;
}
