var tom,tomi,tom2,tom3;
var mouse,mousei,m2,m3,m4;
var bg,bgi;


function preload() {
    tomi=loadImage("images/cat1.png");
    bgi=loadImage("images/garden.png");
    mousei=loadImage("images/mouse1.png");
    tom2=loadImage("images/cat2.png");
    tom3=loadImage("images/cat4.png");
    m2=loadImage("images/mouse3.png");
    m3=loadImage("images/mouse2.png");
    m4=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,1000,800);
    bg.addImage("G", bgi);

    tom=createSprite(900,600,20,20);
    tom.addImage("T", tomi);
    tom.scale=0.1;
    tom.debug=true;

    mouse=createSprite(100,600,20,20);
    mouse.addImage("M", mousei);
    mouse.scale=0.1;
    mouse.debug=true;
    mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(mouse)) {
        tom.velocityX=0;
        tom.addAnimation("catstopping", tom3);
        tom.changeAnimation("catstopping")
        mouse.addAnimation("mousechange", m4);
        mouse.changeAnimation("mousechange");
        }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW) {
    tom.velocityX=-5;
    tom.addAnimation("catRunning", tom2);
    tom.changeAnimation("catRunning");
    mouse.addAnimation("mouseteasing", m3);
    mouse.changeAnimation("mouseteasing");
}

}
