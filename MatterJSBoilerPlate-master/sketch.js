const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer, rubber;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
   
	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);

	ground = new Ground(600,height,1200,20)
	hammer = new Hammer(700,320,70,20);
	rubber = new Rubber(700,320,20);
	stone = new Stone(700,320,50,50);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  ground.display();
  rubber.display();
  stone.display();
  drawSprites();
 
}



