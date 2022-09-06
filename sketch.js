const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var button1, button2;
var wall1l;
var wall2;

let engine;
let world;

function setup() {
	createCanvas(1365, 500);

	 ball_options={
		isStatic:false,
		restitution: 0.3,
		friction: 0.01,
		density: 0.002
	}

	 ground_options={
		isStatic:true
	}


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(20, 20, 20, ball_options);
	World.add(world,ball);

	ground = Bodies.rectangle(490, 490, 5000, 20, ground_options);
	World.add(world,ground);

	wall1 = Bodies.rectangle(1300, 490, 30, 500, ground_options);
	wall2 = Bodies.rectangle(1000, 490, 30, 300, ground_options);

	Engine.run(engine);
	fill("white")

	button1 = createImg("up.png");
	button1.position(20, 30);
	button1.size(50, 50);
	button1.mouseClicked(v_force);
	button2 = createImg("right.png");
	button2.position(220, 30);
	button2.size(50, 50);
	button2.mouseClicked(h_force);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  Engine.update(engine);
  background("lightblue");
  
  drawSprites();

  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 5000, 20);
  rect(wall1.position.x, wall1.position.y, 30, 500);
  rect(wall2.position.x, wall2.position.y, 30, 300);
 
}

function h_force() {

	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
  
  }
  
  function v_force() {
  
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0.05});
  
  }