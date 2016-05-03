// A PAGE

// CONSTANTS
var GROUND = 375;

// A PAGE OBJECT PROTOTYPE DEFINITION
function APage() {
	// APage Constructor
	this.text = "A is for Airplane."
	this.instructions = "Fly around with the arrow keys."
	this.pageObjs = [new Airplane(100, 150), new Cloud(200, 100), 
						new Cloud(400, 250), new Cloud(600, 200)];
}

APage.prototype.loadPage = function() {
	// Code to run when page is loaded.
	document.getElementById("pgText").innerHTML = this.text;
	document.getElementById("pgInstructions").innerHTML = this.instructions;
}

APage.prototype.updatePage = function() {
	// Ask all page objects to update
	for (var i = 0; i < this.pageObjs.length; i++) {
		this.pageObjs[i].update();
	}
}

APage.prototype.drawPage = function() {
	// Draw background and ground
	background(135, 206, 250);
	fill(0, 255, 0);
	noStroke();
	rect(0, GROUND, SCREEN_WIDTH, SCREEN_HEIGHT - GROUND);
	
	// Ask all page objects to draw
	for (var i = 0; i < this.pageObjs.length; i++) {
		this.pageObjs[i].draw();
	}
}

APage.prototype.processKeyPressed = function() {
	var airplane = this.pageObjs[0];
	
	if (keyCode === UP_ARROW) { airplane.dy = -5; }
	else if (keyCode === DOWN_ARROW) { airplane.dy = 5; }
	else if (keyCode == RIGHT_ARROW) { airplane.dx = 5; }
	else if (keyCode == LEFT_ARROW) { airplane.dx = -5; }
}

APage.prototype.processKeyReleased = function() {
	var airplane = this.pageObjs[0];
	
	if (keyCode == UP_ARROW && airplane.dy < 0) { airplane.dy = 0; }
	else if (keyCode === DOWN_ARROW && airplane.dy > 0) { airplane.dy = 0; }
	else if (keyCode === RIGHT_ARROW && airplane.dx > 0) { airplane.dx = 0; }
	else if (keyCode === LEFT_ARROW && airplane.dx < 0) { airplane.dx = 0; }
}

APage.prototype.processMousePressed = function() {
	;
}
// END APAGE OBJECT PROTOTYPE DEFINITION


// AIRPLANE OBJECT DEFINITION
function Airplane(x, y) {
	this.x = x;
	this.y = y;
	this.dx = 0;
	this.dy = 0;
};

Airplane.prototype.draw = function() {
	fill(255, 0, 0);
	noStroke();
	// x,y top left; w = 80, h = 40
	triangle(this.x, this.y, this.x, this.y + 20, this.x + 25, this.y + 20);
	triangle(this.x, this.y + 20, this.x + 20, this.y + 20, this.x + 20, this.y + 40);
	rect(this.x + 20, this.y + 20, 40, 20);
	triangle(this.x + 60, this.y + 20, this.x + 60, this.y + 40, this.x + 80, this.y + 40);
	stroke(0);
	line(this.x + 30, this.y + 30, this.x + 50, this.y + 30);
};

Airplane.prototype.update = function() {
	// Update position
	this.x += this.dx;
	this.y += this.dy;
  
	// Check for vertical boundaries
	if (this.y < 0) { this.y = 0; }
	else if (this.y + 40 > GROUND) { this.y = GROUND - 40; }
  
	// Check for horizontal boundaries
	if (this.x < 0) { this.x = 0; }
	else if (this.x + 80 > SCREEN_WIDTH) { this.x = SCREEN_WIDTH - 80;}
};

// END AIRPLANE OBJECT DEFINITION

// CLOUD OBJECT DEFINITION
function Cloud(x,y) {
	this.x = x;
	this.y = y;
	this.dx = random(-5, -3);
}

Cloud.prototype.draw = function()  {
	fill(255);
	stroke(0);
	ellipse(this.x, this.y, 60, 30);
};

Cloud.prototype.update = function() {
	this.x += this.dx;
  
	if (this.x + 30 < 0) {
		this.x = SCREEN_WIDTH + 60;
		this.y = random(20, GROUND - 100);
		this.dx = random(-5, -3);
	}
};

// END CLOUD OBJECT DEFINITION
