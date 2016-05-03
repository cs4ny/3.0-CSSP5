// TextBox Input
var result;
var clicked = false;

//function preload(){
	//result = loadStrings('hello.txt');
//}

function setup(){
	var inp = createInput('');
	inp.input(myInputEvent);
	inp.size(600,400);
	inp.position(350,350);
	//var ind = floor(random(result.length));
	//text(result[ind],50,50,180,80);
	
	//for (var i = 0; i < result.length; i++) {
		//println(result[i]);
	//}
}
	
function myInputEvent(){
	var lWord = split(this.value(),' ');
	console.log(lWord);
	if (clicked == true){
		save(lWord + " ",'blog.txt');
		clicked = false;
	}

}


function test(){
	console.log('hello');
}
