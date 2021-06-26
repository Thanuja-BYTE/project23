var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box,box1,box2;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
    
    box=createSprite(width/2,650,200,20);
	box.shapeColor=color(255,0,0);

	box1=createSprite(300,620,20,100);
	box1.shapeColor=color(255,0,0);

	box2=createSprite(500,620,20,100);
	box2.shapeColor=color(255,0,0);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , { isStatic:true } );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	keyPressed();
	box.display();
	box1.display();
	box2.display();
	packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 
	rectMode(CENTER);
    background(0);
    drawSprites();
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false); 
	 }
   }