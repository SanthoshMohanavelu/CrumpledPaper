
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper, ground, Bucket1, Bucket2, Bucket3; 
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    
    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper = new Paper(20,600, 11);
    ground = new Ground(400,680,800,20);
    Bucket1 = new Bucket(610,660, 100, 20);
    Bucket2 = new Bucket(550,620,20,100);
    Bucket3 = new Bucket(670,620,20,100)

    

    Engine.run(engine);

    
  
}

function draw() {
  
  Engine.update(engine)

  rectMode(CENTER);
  
  background(0);
  
  //Engine.update(engine);
    
  paper.display();

  ground.display();

  Bucket1.display();
  Bucket2.display();
  Bucket3.display();

  
  fill("white")
  textSize(25)
  text("Up Arrow = Paper Flying", 230, 325)
    
}

function keyPressed(){
  if (keyDown(UP_ARROW)) {
    Matter.Body.applyForce(paper.body, {x: paper.body.position.x, y: paper.body.position.y}, {x: 0.01, y: -0.04})
  }

}



  


