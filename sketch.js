const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    stone  =  new Stone(700,420,11);
    stone1  =  new Stone(710,420,11);
    stone2 =  new Stone(720,420,11);
    stone3  =  new Stone(730,420,11);
    stone4  =  new Stone(740,420,11);
     iron = new Iron(600,420,50,70)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    iron.display();
}