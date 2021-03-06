
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10;
var thief;
var diamond;
var police;
var state=0;
function preload()
{
	
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(500,590,100000,10);
	ground2 = new Ground(100,80,10,200);
  ground3 = new Ground(200,180,200,10);
  ground4 = new Ground(300,280,10,200);
  ground5 = new Ground(400,400,10,400);
  ground6 = new Ground(400,100,300,10);
  ground7 = new Ground(550,200,10,500);
  ground8 = new Ground(400,10,10,200);
  ground9 = new Ground(600,450,100,10);
	ground10 = new Ground(700,250,100,10);

  thief = new Thief(50,50,30,30);

  police = new Police(600,350,50,50);
  
	
  diamond = new Diamond(700,50,110,100);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  text(mouseX+" "+mouseY,200,100)
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();
  ground10.display();
  thief.display();
  diamond.display();
  police.display();
  
  if(police.body.position.x>=800){
   
    state=1;
  }
  else if(police.body.position.x<=600){
    
    state=0;
  }
  if(state===0){
    police.body.position.x=police.body.position.x+5;
  }
  if(state===1){
    police.body.position.x=police.body.position.x-5;
  }
  if(thief.body.position.x===700&&thief.body.position.y===50){
    text("YOU WON",700,200)
  }
  drawSprites();
 
}
     
function keyPressed() {
  if(keyCode === 40){
    push();
     thief.body.position.y=thief.body.position.y+30;
     pop(); 
  }
  if(keyCode === 39){
    push();
     thief.body.position.x=thief.body.position.x+30;
     pop(); 
  }
  if(keyCode === 38){
    push();
     thief.body.position.y=thief.body.position.y-30;
     pop(); 
  }
  if(keyCode === 37){
    push();
     thief.body.position.x=thief.body.position.x-30;
     pop(); 
  }
}

