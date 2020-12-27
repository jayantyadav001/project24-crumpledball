
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var engine,world,dustbin,ball
 
 function preload()
{


}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);       
 
	dustbin = new Dustbin(720,390,100,10)
	ball = new Ball(100,300,10)
	ground = Bodies.rectangle(width/2,400,width,10,{isStatics:false})
		World.add(world,ground);

			
}


function draw() {
  rectMode(CENTER);
  background(black);
dustbin.dislay();
ball.dislay();
  drawSprites();
 
}

function keyPressed()
{
 if(keycode === up_arrow)
 {
	 Matter.body.applyForce(ball.body,ball.body.position)
	 {
	 X: 12
	 y: -13
	       }
 }
}

