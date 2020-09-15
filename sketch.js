const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5,roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof =new Roof(100,100,20,20)

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*4,0);
	rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*6,0);
	rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*8,0);
	rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*10,0);

	bobObject1=new BobObject(400,670,20);
	bobObject2=new BobObject(450,670,20);
	bobObject3=new BobObject(500,670,20);
	bobObject4=new BobObject(550,670,20);
	bobObject5=new BobObject(600,670,20);


	Engine.run(engine);
  
}


function draw() {
  
  ellipse(bobObject1.position.x,bobObject1.position.y,20,20);
  ellipse(bobObject2.position.x,bobObject2.position.y,30,30);
  ellipse(bobObject3.position.x,bobObject3.position.y,40,40);
  ellipse(bobObject4.position.x,bobObject4.position.y,50,50);
  ellipse(bobObject5.position.x,bobObject5.position.y,60,60);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  text (mouseX+","+mouseY,mouseX,mouseY);
  
  drawSprites();
 
}



