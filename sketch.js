const Engine = Matter.Engine;
const World = Matter.World;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 730);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

    for (var a = 0; a < width; a = a+ 50){
      particles.push(new Particle(random(a+10,a+30), random(35, 60), 10));
    }

   for (var k = 0; k < width; k = k + 80) {
       divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j < width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j < width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j < width-10; j=j+50) {   
       plinkos.push(new Plinko(j,375));
    }

}

function draw() {
  background("black");
  textSize(20);
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   for(var a = 0; a < particles.length; a = a+3){
    particles[a].display();
   }
}

function keyPressed(){
  if(keyCode === 32){
    for(var i = 0; i<particles.length; i++){
      particles[i].display();
    }
   }
}