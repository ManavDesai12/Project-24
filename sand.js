class Sand{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:5,
            density:1,
        }
        this.body = Bodies.circle(x,y, 5, options);
        this.radius = 10
        World.add(world, this.body);
        



    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        circle(0, 0, this.radius);
        pop();
    }
}