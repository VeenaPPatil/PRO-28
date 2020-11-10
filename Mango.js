class Mango {
        constructor(x,y,r) {
          var options = {
              isStatic: true,
              restitution:0,
              friction:1, 
          }
          this.body = Bodies.circle(this.x,this.y,this.r,options);
          this.x=x;
          this.y=y;
          this.r=r;
          World.add(world, this.body);
          this.image = loadImage("mango.png");
        }
        display(){
          var pos =this.body.position;
          translate(pos.x,pos.y);
          rotate(this.body.angle);
          //fill()
          imageMode(CENTER);
          ellipseMode(CENTER);
          image(this.image,0,0,this.r*2,this.r*2);
          push();
          pop();
        }
    }     
