var bg
var bottomGround
var topGround
var smileyface

function preload(){
smileyface = loadImage("SNice.svg.png")
coin = loadImage("coin.png")
}


function setup(){

//background image
bg = createCanvas(700,700)



      
 //walls
 wall1 = createSprite(400,50,10,300); //top right wall
 wall2= createSprite(200,10,10,400); // top of big wall
 wall3 = createSprite(200,390,10,200);
 wall4 = createSprite(400,390,10,200); //bottom right wall
 wall5 = createSprite(400,200,150,10);
 wall6 = createSprite(470,400,150,10);
 wall7 = createSprite(200,290,140,10);
 wall8 = createSprite(260,120,120,10);
 wall9 = createSprite(480,340,10,290);
 wall10 = createSprite(260,400,120,10);
 wall11 = createSprite(200,200,10,170);
 wall12 = createSprite(200,550,10,170);
 wall13 = createSprite(260,500,130,10);
 wall14 = createSprite(425,550,120,10);
 wall15 = createSprite(480,490,10,120);
 wall16 = createSprite(310,630,210,10);
 wall17 = createSprite(330,60,140,10);
 wall18 = createSprite(330,350,140,10);
 wall19 = createSprite(260,180,10,130);
 wall20 = createSprite(270,550,10,100);
 

 

 



}

function draw() {
  
  background("purple");
        
          //making the hot air balloon jump
          if(keyDown("leftArrow")) {
            smileyface.velocityY = -6 ;
            
          }

          //adding gravity
          
   
        drawSprites();
        
}