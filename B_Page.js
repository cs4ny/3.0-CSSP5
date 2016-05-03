// B PAGE

// B PAGE OBJECT PROTOTYPE DEFINITION
function BPage() {
	// BPage Constructor
	this.text = "B is for Ball."
	this.instructions = "Click the ball to make it bounce."
	this.ball = new Ball(300, 350, 50, color(0, 0, 255));
}

BPage.prototype.loadPage = function() {
	// Code to run when page is loaded.
	document.getElementById("pgText").innerHTML = this.text;
	document.getElementById("pgInstructions").innerHTML = this.instructions;
	this.ball.reset();
}

BPage.prototype.updatePage = function() {
	this.ball.update();
}

BPage.prototype.drawPage = function() {
	// Draw background
	background(255);
	
	// Draw ball
	this.ball.draw();
}

BPage.prototype.processKeyPressed = function() {
	;
}

BPage.prototype.processKeyReleased = function() {
	;
}

BPage.prototype.processMousePressed = function() {
	this.ball.isClicked();
}
// END BPAGE OBJECT PROTOTYPE DEFINITION


// BALL OBJECT PROTOTYPE DEFINITION
function Ball(x, y, r, colour) {
	// Ball Constructor
	this.x = x;
	this.y = y;
	this.r = r;
	this.initDy = -20;
	this.dy = 0;
	this.gravity = 0;
	this.colour = colour;
};

Ball.prototype.draw = function() {
	fill(this.colour);
	stroke(0);
	ellipse(this.x, this.y, this.r * 2, this.r * 2);
};

Ball.prototype.update = function() {
	// Update position & speed
	this.y += this.dy;
	this.dy += this.gravity;
	
	// Reset speed to initDy if hit the ground
	if (this.y + this.r > SCREEN_HEIGHT) {
		console.log(SCREEN_HEIGHT);
		this.y = SCREEN_HEIGHT - this.r;
		this.dy = this.initDy;
	}	
};

Ball.prototype.isClicked = function() {
	// Start bouncing if ball is clicked
	var distance = dist(mouseX, mouseY, this.x, this.y);
	if (distance < this.r) {
		this.dy = this.initDy;
		this.gravity = 0.8;
	}
};

Ball.prototype.reset = function() {
	this.y = 350;
	this.dy = 0;
	this.gravity = 0;
};
// END BALL OBJECT DEFINITION
