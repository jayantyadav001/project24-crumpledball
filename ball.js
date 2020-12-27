class Ball 
{
    constructor(x,y,radius)
    {
        var options =
        {
            isStatics:false,
            restitution:0.2,
            friction:0.3,
            density:1.0
        }
        this.radius = radius
        this.body = this.body.circle(x,y,radius,options);
        World.add(world,this.body);
    }
        display()
        {
            fill("red")
            stroke("orange");
            ellipseMode(RADIUS);
            ellipse(this.body.position.x,this.body.position.y,this.radius);
        }





}