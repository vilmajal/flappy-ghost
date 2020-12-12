var backgroundImg;
var ghostImg;
var ghost;

function preload(){
ghostImg= loadImage('images/NicePng_ghost-png_17668.png');
backgroundImg = loadImage('images/NicePng_nativity-silhouette-png_9711946.png');

}

function setup() {
  // put setup code here
  createCanvas(400,600);
  ghost = createSprite(width/2, height/2, 10, 10);
  ghost.addImage(ghostImg);
  //create a sprite with a placeholder rectangle as visual component
  //tempGhost = createSprite(100, 150, 50, 100);
  //change the color of the placeholder
  //tempGhost.shapeColor = color(222, 125, 2);
}

function draw() {
  // put drawing code here
  background(backgroundImg);
  drawSprites();
}