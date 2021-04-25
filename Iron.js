class Iron {
    constructor(x, y,width,height) {
      var options = {
        'density':0.2,
        'friction': 3,
        'restitution':30
      };
      this.body = Bodies.rectangle(x, y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
     var Ironpos = this.body.position;
   
  
      push();
      translate(Ironpos.x, Ironpos.y);
      strokeWeight(3);
      stroke('black')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  