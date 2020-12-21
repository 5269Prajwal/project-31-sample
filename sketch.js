const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
   var canvas = createCanvas(480,800);
  engine = Engine.create();
    world = engine.World;
  //createSprite(400, 200, 50, 50);
}

//var ground;

function draw() {
  background("black");
  
  ground = new Ground(100,10,300,20);

  drawSprites();
}