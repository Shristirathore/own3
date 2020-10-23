            //Dino on a mission!!!
var crate,crateImage;
var tree,treeImage;
var bush,bushImage;
var sign,signImage;
var egg,eggImage
var dino,dinoImage;
var ladder,ladderImage;
var bg,bgImage
var rain,rainImage;
var rb,rbImage;
var snow,snowI;
var sb,sbImage;
var hf;
var score=0;
var meteor,meteorImage;
var eggsGroup;
var treesGroup;
var laddersGroup;
var meteorGroup;
var gameState="play";
var ta,taImage;

function preload(){
snowI=loadAnimation("Snow flackes 1.png","snowflackes 2.png")
  taImage=loadImage("hey.png");
  sbImage=loadImage("chist.png"); 
  meteorGroup=new Group();
  meteorImage=loadImage("meteor-removebg-preview.png");
  hf=loadSound("gjvf.mp3")
  crateImage=loadImage("Crate.png");
  bushImage=loadImage("Bush (1).png");
  signImage=loadImage("Sign_1.png");
  treeImage=loadImage("pic 1.png");
  eggImage=loadImage("sagas.png");
  dinoImage=loadImage("Idle (2).png");
  ladderImage=loadImage("dfgh.png");
  bgImage=loadImage("BG.png");
  rainImage=loadAnimation("Rain 1.png","rain 2.png");
  rbImage=loadImage("frchnd.png");


}


function setup() {
  
  createCanvas(400, 400);
  
  ta=createSprite(200,200);
  ta.addImage("fyuhdjs",taImage);
  ta.scale=0.5;
  ta.visible=false;
  
  bg=createSprite(200,200,400,400);
  bg.addImage("bxdjsnzj",bgImage);
  bg.velocityX=-4;
  
  dino=createSprite(47,344);
  dino.addImage("dbexszhe",dinoImage);
  dino.scale=0.15;
 
  rain=createSprite(200,180);
  rain.addAnimation("rcdhxs",rainImage);
  rain.visible=false;
  rain.scale=1.3;
  
  rb=createSprite(370,30);
  rb.addImage("cfh",rbImage);
  rb.scale=0.15;
  
  snow=createSprite(200,100,400,400); 
  snow.addAnimation("dsj",snowI);
  snow.visible=false;
  snow.scale=2.6;
  
  sb=createSprite(350,370);
  sb.addImage("ghs",sbImage)
  sb.scale=0.2;
  
  eggsGroup=new Group();
  
  treesGroup=new Group();
  
  laddersGroup=new Group();
  
  hf.loop();
}
function spawnEggs(){
 
  if(frameCount%200===0){
  
    tree=createSprite(400,108);
    tree.addImage("dxbnjsdie",treeImage);
    tree.scale=0.5;
    tree.velocityX=-4;
    tree.y=Math.round(random(150,300));
    
    egg=createSprite(400,63);
    egg.addImage("exsnzjdhuxjs",eggImage)
    egg.scale=0.1;
    egg.y=tree.y-45;
    egg.velocityX=-4;
    
    ladder=createSprite(400,129);
    ladder.addImage("cbdhxns",ladderImage);
    ladder.scale=0.04
    ladder.y=tree.y+21;
    ladder.velocityX=-4;
    
    eggsGroup.add(egg);
    laddersGroup.add(ladder);
    treesGroup.add(tree);
                          egg.setCollider("rectangle",0,0,egg.width,egg.height)
    
  }
  
}
function spawnObstacles(){
  if(frameCount%60===0){
    meteor=createSprite(400,200);
    meteor.y=Math.round(random(100,380))
    meteor.addImage("ghdx",meteorImage)
    meteor.scale=0.1;
    meteor.velocityX=-8;
    meteorGroup.add(meteor);
  }
  
}

function draw() {
  
 
  if(gameState==="play"){
    rb.visible=true;
    sb.visible=true;
    
    dino.visible=true;
    bg.visible=true;
    dino.depth=treesGroup.depth;
    dino.depth=dino.depth+1;
    if(mousePressedOver(rb)){
      rain.visible=true;
      snow.visible=false;

    }
    if(dino.y>400){
      gameState="end"
    }
    if(mousePressedOver(sb)){
      snow.visible=true;
      rain.visible=false;
    }
    spawnEggs();
    spawnObstacles();
  
    dino.velocityX=0;
    dino.velocityY=0;
    background(220);
    if(bg.x<100){
      bg.x=200;
    }
    if(keyDown("left")){
      dino.velocityX=-4;
    }
    if(keyDown("right")){
      dino.velocityX=4;
    }
    if(keyDown("up")){
      dino.velocityY=-4;
    }
    if(keyDown("down")){
      dino.velocityY=4;
    }
dino.setCollider("rectangle",0,0,dino.width,dino.hieght)
 
    if(dino.isTouching(eggsGroup)){
      egg.destroy();
      score=score+100;
 
    }
  } 
  if(dino.isTouching(meteorGroup)){
    gameState="end";
  }
  if(gameState==="end"){
    background("yellow");
    if(mousePressedOver(ta)){
      gameState="play";
      ta.visible=false;
      dino.x=47;
      dino.y=344;
    }
    score=0;
    ta.visible=true;
    bg.visible=false;
    dino.visible=false;
    treesGroup.destroyEach();
    laddersGroup.destroyEach();
    eggsGroup.destroyEach();
    meteorGroup.destroyEach();
    rb.visible=false;
    sb.visible=false;
    snow.visible=false;
    rain.visible=false;
  
  } 
  
  drawSprites();
  if(gameState==="play"){
    fill("black")
    text("Your Score: "+score,30,30);
    
  }

  
     
}
