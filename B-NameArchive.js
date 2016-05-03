// TextBox Input
var result;
var postSel = 'hello1.txt';

function preload(){
	result = loadStrings(postSel);
}

function setup(){
	//console.log(result);
	var height = result.length * 10 + 100 ;
	console.log(postSel);
	
	var cnv = createCanvas(900,height);
	cnv.parent("canvasContainer");
	
	background(0,0,0);
	var ind = floor(random(result.length));
	fill(250,250,250);
	textSize(15);
	text(result,50,70,800,height);
	//text("hello good mornng good afternoon computer sciecne blog tbloc archve about click add screen keyboard mouse test test stes ", 10, 100);


}

function test(){
	console.log('hello');
}
