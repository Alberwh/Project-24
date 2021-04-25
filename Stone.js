class Stone{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'restitution':0.3,
		'friction':0.9,
		'density':12
	}
	this.x=x;
	this.y=y;
	this.r=r
	this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
	World.add(world, this.body);
		

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("purple");
			ellipse(0, 0, this.r, this.r);

			pop()
	}

}