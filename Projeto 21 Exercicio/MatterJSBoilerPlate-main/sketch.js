
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftSide;
var rightSide;


function setup() {
	createCanvas(700,700);
	
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1200,600,20,120);
	
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(100, 10 , 20, ball_options);
	World.add(world,ball);

	leftSide = Bodies.rectangle(1100,600,20,120,)


	//Engine.run(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
  background(51);
  
  ground.display();
  //leftSide.display();
  rightSide.display();

  ellipse(ball.position.x, ball.position.y, 20,40);

  Engine.update(engine);
  drawSprites();
 
}

//function Hforce(){
	//Matter.Body.applyForce(ball,{x : 0,y : 0},{x : 0.02,y : 0}); 
//}
  
  //function Vforce(){
	//Matter.Body.applyForce(ball,{x : 0,y : 0},{x : 0,y : 0.02});
//}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball,{x : 0,y : 0},{x : 0.02,y : 0.02});

	}
}



