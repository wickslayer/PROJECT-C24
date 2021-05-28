
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, dustbin2, dustbin3;
var paper;

var gameState = "dirty";

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here,
	dustbin = new Dustbins(720, 550, 260, 20);
	dustbin2 = new Dustbin2(600, 490, 20, 100);
	dustbin3 = new Dustbin2(790, 490, 20, 100);
	ground = new Ground(400, 570, 800, 20);
	paper = new Waste(200 ,200, 30)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(135,206,235)
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:100,y:-150});
	}}
