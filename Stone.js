class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r/2,options);
      this.x=x;
      this.y=y;
      this.r=r;
      World.add(world, this.body);
      this.image = loadImage("stone.png");
    }

    display(){
      var pos =this.body.position;
      imageMode(CENTER)
      ellipseMode(CENTER);
      image(this.image, 0,0,this.r*2, this.r*2);
      push();
      pop();
    }
  };