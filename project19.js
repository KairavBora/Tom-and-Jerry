var garden,cat,mouse
var gardenImg,catImg,catImg2,mouseImg



function preload() {
    //load the images here
    gardenImg = loadImage("garden.png")
    catImg = loadImage("cat1.png")
    catImg2=loadImage("cat2.png","cat3.png")
    mouseImg=loadImage("mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(500,400,50,80)
garden.addImage(gardenImg)

cat=createSprite(400,300,100,80);
cat.addImage(catImg);

mouse= createSprite(200,300,150,80);
mouse.addImage(mouseImg)
}

function draw() {

    background("white");
    text(mouseX+','+mouseY,10,45)
    //Write condition here to evalute if tom and jerry collide
keyPressed();



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");
  }


}
