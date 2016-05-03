// CONSTANTS
var SCREEN_WIDTH = 600;
var SCREEN_HEIGHT = 400;

// ABC BOOK OBJECT PROTOTYPE DEFINITION
function ABC_Book() {
	// ABC_Book Constructor
	this.pageNumber = 0;
	this.pages = [new APage(), new BPage(), new UPage(), new XPage()];
	this.pages[0].loadPage();
	
};

ABC_Book.prototype.flipForward = function() {
	if (this.pageNumber < this.pages.length - 1) {
		this.pageNumber += 1;
		this.pages[this.pageNumber].loadPage();
	}
};

ABC_Book.prototype.flipBack = function() {
	if (this.pageNumber > 0) {
		this.pageNumber -= 1;
		this.pages[this.pageNumber].loadPage();
	}
};

// END ABC BOOK OBJECT PROTOTYPE DEFINITION


// MAIN PROGRAM SETUP AND LOOP
function setup() {
	var cnv = createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	cnv.parent("canvasContainer");
	
	book = new ABC_Book();
	
}

function draw() {	
	// Update & Draw Current Page
	book.pages[book.pageNumber].updatePage();
	book.pages[book.pageNumber].drawPage();
}

// PROCESS EVENTS
function keyPressed() {
	book.pages[book.pageNumber].processKeyPressed();
}

function keyReleased() {
	book.pages[book.pageNumber].processKeyReleased();
}

function mousePressed() {
	book.pages[book.pageNumber].processMousePressed();
}

