const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg, boggie1


function preload(){

bg=loadImage("images/bg.jpg")


  
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  ground= new Ground(600,390,1200,10)
  boggie1=new Boggie(50,350,50,50)
  boggie2=new Boggie(150,350,50,50)
  boggie3=new Boggie(250,350,50,50)
  boggie4=new Boggie(350,350,50,50)
  boggie5=new Boggie(450,350,50,50)
  boggie6=new Boggie(550,350,50,50)
  chain1=new Chain(boggie1.body,boggie2.body)
  chain2=new Chain(boggie2.body,boggie3.body)
  chain3=new Chain(boggie3.body,boggie4.body)
  chain4=new Chain(boggie4.body,boggie5.body)
  chain5=new Chain(boggie5.body,boggie6.body)
  rock=new Rock(1000,335,100,50)







}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  boggie1.show()
  boggie2.show()
  boggie3.show()
  boggie4.show()
  boggie5.show()
  boggie6.show()
  chain1.show()
  chain2.show()
  chain3.show()
  chain4.show()
  chain5.show()
  rock.show()

if(keyDown("D")){
  Matter.Body.applyForce(boggie6.body,boggie6.body.position,{x:0.1,y:0})
}
var collision=Matter.SAT.collides(boggie6.body,rock.body)
if(collision.collided){
  textSize(35)
  fill ("blue")
  text("Crash",600,200)

}

  
 
}