// X PAGE 

// X PAGE OBJECT PROTOTYPE DEFINITION
function XPage() {
	// UPage Constructor
	this.text = "X is for Xmas tree"
	this.instructions = "Animated Xmas tree"
	this.pageObjs = [];

	this.cChange = true;
	this.time = 0
	
	for (var i = 0; i < 10

}

XPage.prototype.loadPage = function() {
	// Code to run when page is loaded.
	document.getElementById("pgText").innerHTML = this.text;
	document.getElementById("pgInstructions").innerHTML = this.instructions;
}

XPage.prototype.updatePage = function() {
	// Ask all page objects to update
	for (var i = 0; i < this.pageObjs.length; i++) {
		this.pageObjs[i].update();
	}
	
	this.time += 1
	if (this.time > 100){
		this.cChange = false;
	}
	if (this.time > 110){
		this.cChange = true;
		this.time = 0;
	}
	
	

}

XPage.prototype.drawPage = function() {
	// Draw background and ground
	background(255, 255, 255);
	
	fill(0,0,0);
	rect(0,0,600,300);
	
	fill(0,100,0);	
	triangle(170, 260, 250, 170, 340, 260);
	triangle(180, 220, 250, 140, 330, 220);
	triangle(190, 180, 250, 110, 320, 180);
	triangle(200, 140, 250, 80, 310, 140);
	triangle(210, 100, 250, 50, 300, 100);
	triangle(220, 60, 250, 20, 290, 60);

	fill(64,0,0);
	rect(240,260,20,70);
	
	
	
	if (this.cChange){
		fill(255,255,130);
		ellipse(100, 100, 10,10);
		ellipse(120, 90, 10,10);
		ellipse(400, 200, 10,10);
		ellipse(500, 150, 10,10);
		ellipse(200, 60, 10,10);
		ellipse(80, 150, 10,10);
		ellipse(190, 110, 10,10);
	}else{
		fill(0,0,0);
		ellipse(100, 100, 10,10);
		ellipse(120, 90, 10,10);
		ellipse(400, 200, 10,10);
		ellipse(500, 150, 10,10);
		ellipse(200, 60, 10,10);
		ellipse(80, 150, 10,10);
		ellipse(190, 110, 10,10);
	}

	
	
	
	

	for (var i = 0; i < this.pageObjs.length; i++) {
		this.pageObjs[i].draw();
	}
}


// -------------------------------------------------------------------------------------
// STAR 

function Star(x,y,cChange){
	
	this.x = x
	this.y = y
	this.cChange = cChange;
}


Star.prototype.draw = function() {
	if (this.cChange){
		fill(255,255,130);
		ellipse(x,y,10,10);
	}else{
		fill(0,0,0);
		ellipse(x,y,10,10);
	}
};
