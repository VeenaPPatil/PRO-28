class Rubber{
    constructor(body,anchor){
        var options={
            bodyA: body,
            pointB: anchor,
            stiffness:0.004,
            length:1
        }
        this.bodyA=body;
        this.pointB=anchor;
        this.Rubber=Constraint.create(options);
        World.add(world,this.Rubber);
    }

    fly(){
        this.Rubber.bodyA=null;
       }

    attach(body){
        this.Rubber.bodyA=body;
    }   
    

    display(){
        
        
        if(this.Rubber.bodyA){
		
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
       
    
    }
}