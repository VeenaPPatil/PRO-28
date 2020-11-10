
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine,world;
var treeimg;

function preload()
{
	
}

function setup() {
	createCanvas(1300,600);
	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
	ground = new Ground(width/2,600,width,20); 
    tree = new Tree(750,50,300,350);
	boy = new Boy(500,250,130,180);
	stone = new Stone(235,420,30);
	mango1=new Mango(1100,100,30);
    mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mngo(1120,50,40);
	mango12=new Mango(900,160,40);

	rubber = new Rubber(boy.body,stone.body);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	})

	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  textSize(25);
  text("Press Space to get a second chance to Play!",50 ,50);
  
  tree.display();
  boy.display();
  stone.display();
  rubber.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,boy.body); 
}

function mouseReleased()
{
	rubber.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body,boy.body); 
	  rubber.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

 
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }




