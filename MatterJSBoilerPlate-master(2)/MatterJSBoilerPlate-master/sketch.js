
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papper, dustbin,launcher;
function preload() {
dustbin=loadImage("dustbingreen.png")

}

function setup() {
  createCanvas(1200, 400);
 
  engine = Engine.create();
  world = engine.world;
  
  var option = {
'isStatic':true

}
ground = Bodies.rectangle(width/2,380,width,5,option)

World.add(world,ground);
 basketL = new basket (800,320,20,100);
 basketB = new basket (910,360,200,20);
 basketR = new basket (1000,320,20,100);
  //Create the Bodies Here.
  papper = new paper(200, 210, 20, 30)
  launcher1 = new Launcher(papper.body,{x:200, y:100});
  Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background("white");
  papper.display();
  image(dustbin,800,220,200,150)
  
rect(ground.position.x,ground.position.y,width,20)
//basketL.display();
//basketB.display();
//basketR.display();
launcher1.display();




}

function keyPressed () {
if (keyCode === UP_ARROW){

  Matter.Body.applyForce(papper.body,papper.body.position,{x:85 ,y:-85})
}

}
function mouseDragged(){
  Matter.Body.setPosition(papper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
launcher.fly();
}

