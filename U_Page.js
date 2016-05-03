// U PAGE YN 5/2/2016

// U PAGE OBJECT PROTOTYPE DEFINITION
function UPage() {
	// UPage Constructor
	this.text = "U is for Umbrella"
	this.instructions = "Move umbrella with mouse to protect the moving green box"
	this.pageObjs = [new Umbrella(100, 300), new Box(50, 350,50,50,1,0,'GREEN')];
	this.rainL = [new Box(20,0,10,10,0,2)];
	
	// Game Play
	this.hit = false;
	this.gameOver = false;
	this.time = 0;
	this.rTime = Math.random() * 100 + 1;
	this.score = 0;
}

UPage.prototype.loadPage = function() {
	// Code to run when page is loaded.
	document.getElementById("pgText").innerHTML = this.text;
	document.getElementById("pgInstructions").innerHTML = this.instructions;
}

UPage.prototype.updatePage = function() {
	// Ask all page objects to update
	for (var i = 0; i < this.pageObjs.length; i++) {
		this.pageObjs[i].update();
	}
	
	// Update Rain
	for (var i = 0; i < this.rainL.length; i++) {
		this.rainL[i].update();
		
		// Rain Removal
		if (this.rainL[i].y + this.rainL[i].height > SCREEN_HEIGHT || this.rainL[i].y < 0){
			this.rainL.splice(i,1);
		}
		
		// Rain bounce off Umbrella
		try{
		if (cDetect(this.pageObjs[0].x - this.pageObjs[0].width,this.pageObjs[0].y - this.pageObjs[0].height,this.pageObjs[0].width * 2 + 20,this.pageObjs[0].width / 5,this.rainL[i])){
			this.rainL[i].dy = -3;
			this.score += 1;
		}}catch(e){return null;}
		
		// Rain hit box
		if (cDetect(this.pageObjs[1].x,this.pageObjs[1].y,this.pageObjs[1].width,this.pageObjs[1].height,this.rainL[i])){
			this.hit = true;
			try{
				this.rainL.splice(i,1);
			}catch(e){}
		}
	}
	
	// Rain Renewal
	if (this.rainL.length < 10){ 
		for (var i = 0; i < 3; i++){
			nRain = new Box(Math.random() * 600 + 1,Math.random() * 100,10,10,0,Math.random() * 3 + 1);
			this.rainL.push(nRain);
			
		}
	}
	
	// Update box
	// Box is hit
	if (this.hit == true){
		this.pageObjs[1].width = this.pageObjs[1].width - 10;
		this.pageObjs[1].height = this.pageObjs[1].height - 10;
		this.hit = false;
	}
	
	// Box no longer exist
	if (this.pageObjs[1].width == 0 && this.pageObjs[1].height == 0){
		this.gameOver = true;
	}
	
	// Box Movement
	this.time += 1;
	if (this.time > this.rTime) {
		this.pageObjs[1].dx = Math.random() * 3 + 1;
		this.pageObjs[1].dx *= -1;
		this.time = 0
		this.rTime = Math.random() * 200 + 50;
	}
	

}

UPage.prototype.drawPage = function() {
	// Draw background and ground
	background(0, 0, 0);
	fill(255,255,255);
	textSize(20);
	text(this.score,50,50);
	
	// Draw Game Not over
	if ( !this.gameOver ){
		// Ask all page objects to draw
		for (var i = 0; i < this.pageObjs.length; i++) {
			this.pageObjs[i].draw();
		}
		for (var i = 0; i < this.rainL.length; i++) {
			this.rainL[i].draw();
		}
	}
	
	// Draw Game Over
	else{
		fill(255,255,255);
		textSize(20);
		text("OH NO! THE BOX DISAPEARS",200,SCREEN_HEIGHT / 2);
	} 
}

// ----------------------------------------------------------------------------------------------------------------------------------------
// UMBRELLA OBJECT DEFINITION
function Umbrella(x, y) {
	this.x = x;
	this.y = y;
	this.width = 75;
	this.height = 50;

};

Umbrella.prototype.draw = function() {
	
	// Draw Umbrella
	fill(254, 15, 26);
	stroke(0,0,0);
	rect(this.x,this.y - this.height, 20,this.height * 2,20);
	rect(this.x - this.width, this.y - this.height, (this.width * 2) + 20, this.width / 5,30);
	

};

Umbrella.prototype.update = function() {
	// Move with mouse
	this.x = mouseX;
	this.y = mouseY;
};

// ----------------------------------------------------------------------------------------------------------------------------------------
// BOX OBJECT DEFINITION
function Box(x,y,width,height,dx,dy,color = 'WHITE') {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.dx = dx;
	this.dy = dy;
	this.color = color;

}

Box.prototype.draw = function()  {
	
	// Draw Box
	if (this.color == 'WHITE'){
		fill(255,255,255);
	}else{
		fill(37,240,100);
	}
	stroke(0,0,0);
	rect(this.x, this.y, this.width, this.height,10);
};

Box.prototype.update = function() {
	
	// Movement Box
	this.x += this.dx;
	this.y += this.dy;
  
	if (this.x + this.width > SCREEN_WIDTH || this.x < 0){
		this.dx *= -1
	}
};

// ----------------------------------------------------------------------------------------------------------------------------------------
// COLLISION DETECTION
function cDetect(obj1X,obj1Y,obj1Width,obj1Height,obj2){
	
	if (obj1X < obj2.x + obj2.width && obj2.x < obj1X + obj1Width && obj1Y < obj2.y + obj2.height && obj2.y < obj1Y + obj1Height){
		return true;
	}
	
}

