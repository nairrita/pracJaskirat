class Box{
    constructor(x,y,width,height){
     var options = {
         restiution : 0.8,
         density : 1.0,
         friction : 0.4
     }
     this.body = Bodies.rectangle(x,y,width,height,options)
     this.width = width;
     this.height = height;
     World.add(world,this.body)
    }

    display(){
        rectMode(CENTER);
        fill(255)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}