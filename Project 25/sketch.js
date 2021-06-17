const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var dustbinObj,groundObject	
var world;
var paperObject, paperimg;

function preload() {
	paperimg.loadImage('sprites/paper.png');
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	paperObject = new Paper(200,650);

	Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  background(230);
 
  //function keyPressed() {
	//if (keyCode === UP_ARROW) {
		//Matter.Body.applyForce(paperObject.body,paperObject.body.postion,(x:130,y:-145));
	//}
//}

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

