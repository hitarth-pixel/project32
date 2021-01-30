class Particle
    {

            constructor(x,y,radius){

                    var options={restitution:0.4,isStatic:false}
                    
                    this.body=Bodies.circle(x,y,radius,options)
                    this.color=color(random(0,255),random(0,255),random(0,255))
                    this.radius=radius;
                    World.add(world,this.body);
            }

            display(){

                    push ();
                    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
                    ellipseMode(RADIUS);
                    translate (this.body.position.x,this.body.position.y);
                    rotate (this.body.angle);
                   
                    noStroke();
                    fill (this.color);
                    pop ();

            }

    }