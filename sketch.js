
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone, hammer, rubber, ground;
var sand1, sand2, sand3, sand4, sand5, sand6, iron;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

stone = new Stone(200, 200, 30, 30);
rubber = new Rubber(500, 200, 30, 30);
hammer = new Hammer(100, 450, 40, 20);
ground = new Ground (400, height, 1200, 20);
sand1 = new Sand(300, 150, 5);
sand2 = new Sand(200, 150, 5);
sand3 = new Sand(100, 150, 5);
sand4 = new Sand(400, 150, 5);
sand5 = new Sand(500, 150, 5);
sand6 = new Sand(600, 150, 5);
iron = new Iron(700, 400, 40, 10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  rubber.display();
  hammer.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
iron.display();
  drawSprites();
}



