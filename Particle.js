class Particle {
    constructor(x,y){
        var options = {
            restitution: 0,
            friction: 0,
            density: 3
        }
        this.r = 7;
        this.body = Bodies.circle(x,y,this.r,options)
        this.color = color(random(0,255),random(0,255),random(0,255))

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
        noStroke();
        fill(this.color);
        ellipseMode(CENTER)
        ellipse(x,y,this.r,this.r)
        pop();
    }

}