var backgroundImg;
var ghostImg;
var ghost;
var GRAVITY = 0.2;
var CANVAS_HEIGHT=600;
var CANVAS_WIDTH=400;
var MIN_OPENING = 50;
var obstacle;
var topobstacle;
var obstacleImg;

function preload(){
ghostImg= loadImage('images/NicePng_ghost-png_17668.png');
backgroundImg = loadImage('images/NicePng_nativity-silhouette-png_9711946.png');
obstacleImg = loadImage('images/NicePng_tombstones-png_2891296.png')
}

function setup() {
  //setup code
  createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT);
  ghost = createSprite(width/2, height/2, 10, 10);
  ghost.setDefaultCollider()
  ghost.addImage(ghostImg);
  obstacles = new Group();
}

function draw() {
  //drawing code
  background(backgroundImg);
  drawSprites();

  if (keyWentDown(" ")){
    ghost.velocity.y = -6;
  }
  ghost.velocity.y += GRAVITY;

  if(ghost.position.y+ghost.height/2 > CANVAS_HEIGHT){
    ghost.velocity.y = -1 ;
  }


   //obstacles
   if(frameCount%60 == 0) {
    randomH = random(100,400);
    obstacle = createSprite(ghost.position.x+width,CANVAS_HEIGHT-randomH/2+1+100, 80, randomH);
    obstacle.addImage(obstacleImg);
    obstacle.velocity.x = -2;
    obstacle.mirrorY(-1);
  //top
    var topHeight = height - (height-CANVAS_HEIGHT)-(randomH+MIN_OPENING);
    topobstacle = createSprite(ghost.position.x+width,topHeight/2-100,80, randomH)
    topobstacle.addImage(obstacleImg);
    topobstacle.velocity.x = -2;
  }


  camera.position.x = ghost.position.x + width/4;
  camera.off();
  camera.on();

  }
