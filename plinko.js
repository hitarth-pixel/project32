class Plinko {

    constructor(x,y){

        var options={

                isStatic:true

        }
        this.radius=10;
        this.color=255;
        this.body=Bodies.circle(x,y,10,options)        
        World.add(world,this.body);
    }

    display(){
        ellipse(this.body.position.x,this.body.position.y,this.radius);
        ellipseMode(RADIUS);
        fill (this.color)


    }
}