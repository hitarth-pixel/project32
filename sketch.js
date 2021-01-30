
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine, world;

var divisions=[]
var divisionHeight=200;
var plinko=[]
var particle=[]

function setup() 
{
  createCanvas(800,600);
  createSprite(400, 200, 50, 50);
  
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(240,580,1100,20);
 
}
  
function draw() 
{
  background("green"); 

  ground.display();

  for(var k=0;k<=width ; k+=80)
        {

          divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));

        }

  for(var j=0;j<=width;j=j+50)
        {

          plinko.push(new Plinko(j,80));

        }

  for(var m=0;m<=width;m=m+60)
        {

          plinko.push(new Plinko(m,140));

        }

  for(var p=0;p<=width;p=p+50)
        {


          plinko.push(new Plinko(p,200));

        }

  for(var a=0;a<=width;a=a+60)
        {


          plinko.push(new Plinko(a,260));

        }
  for(var a=0;a<=width;a=a+50)
        {


          plinko.push(new Plinko(a,320));

        }

  if (frameCount%50===0)
        {

          particle.push(new Particle(random (width/2-10,width/2+10),10,10))

        }

  for(z=0;z<divisions.length;z++)
        {

          divisions[z].display();

        }

  for(y=0;y<plinko.length;y++)
        {

          plinko[y].display();

        }
        
  for(x=0;x<particle.length;x++)
        {

          particle[x].display();

        }
}