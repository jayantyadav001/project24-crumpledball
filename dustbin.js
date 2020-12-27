class Dustbin
{
    constructor(x,y,width,height)
    {
        var options =
        {
          isStatics:true
        }
    }
       this.bodya = Bodies.reactngle(x,y,width,height,options);
       World.add(world,thisbodya);
       this.bodyb = Bodies.rectangle((x(-width/2)),(y-(height*2)),height,options)
       World.add(world,this.bodyb)
       this.bodyc = Bodies.rectangle((x+(width/2)),(y-(height/2)),height,options)
       World.add(world,this.bodyc)
       this.body.width =width
       this.body.height =height


     display()
     {
         fill("green")
         rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.height)
         rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.height)
        rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.height)
         rect(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.height)
        }


}