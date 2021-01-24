class Rubber {
    constructor(x,y,radius){
        var options = {
            'density' : 1,
            'friction' : 5,
            'resistution' : 0.3
        }
        this.radius = radius;
       
        this.body = Bodies.circle(x, y, this.radius,  options);
         World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
  
         
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill(255,0,0);
        circle(0, 0, this.radius);
        pop();
      }
}