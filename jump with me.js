var canvas;
var music;
var fixedSprit1,fixedSprit2,fixedSprit3,fixedSprit4;
var movingSprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    fixedSprit1=createSprite(100,590,180,20);
    fixedSprit1.shapeColour="pink";

    fixedSprit2=createSprite(300,590,180,20);
    fixedSprit2.shapeColour="aqua";

    fixedSprit3=createSprite(500,590,180,20);
    fixedSprit3.shapeColour="violet";

    fixedSprit4=createSprite(700,590,180,20);
    fixedSprit4.shapeColour="yellow";




    //create box sprite and give velocity
    movingSprite=createSprite(Random(10,750),300,20,20)
    movingSprite.shapeColour="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

 

}

function draw() {
    background("black");
    //create edgeSprite




    //add condition to check if box touching surface and make it box


    if(movingSprite.x<0){
        music.stop();
        movingSprite.velocityX=3;

    }
    else if(movingSprite.x>800){
        music.stop();
        movingSprite.velocityX=3;

    }

    if(isTouching(movingSprite,fixedSprit4)){
        music.play();
        movingSprite.shapeColour("yellow");
        bounceOff(movingSprite,fixedSprit4)


    }
    if(isTouching(movingSprite,fixedSprit3)){
        music.play();
        movingSprite.shapeColour("violet");
        bounceOff(movingSprite,fixedSprit3) 
    }

    if(isTouching(movingSprite,fixedSprit2)){
        music.play();
        movingSprite.shapeColour("aqua");
        bounceOff(movingSprite,fixedSprit2) 
    }

    if(isTouching(movingSprite,fixedSprit1)){
        music.play();
        movingSprite.shapeColour("pink");
        bounceOff(movingSprite,fixedSprit1) 
    }
    drawSprites();
}
