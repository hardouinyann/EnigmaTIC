document.addEventListener("DOMContentLoaded", finChargement);

var canvas;
var ctx;

var posInitX;
var posInitY;

function finChargement () {
	canvas= document.getElementById("canvas");
	canvas.width= 500;
	canvas.height= 400;
	ctx = canvas.getContext("2d");

	ctx.lineWidth = 5 ;
	ctx.fillStyle="white";
	ctx.strokeStyle = 'white';

    ctx.lineWidth= 4;
	canvas.addEventListener("mousedown", beginPath);
	canvas.addEventListener("mouseup", stopPath);

	
	/*ctx.beginPath();
	ctx.moveTo(20, 60);
	ctx.lineTo(200, 200);
	ctx.stroke();
	ctx.closePath();*/
}




function beginPath(ev){
	
	ctx.beginPath();
	posInitX= ev.clientX;
	posInitY= ev.clientY;
	//ctx.moveTo(ev.clientX, ev.clientY);
	console.log("départ "+ev.clientX+" "+ ev.clientY);

	canvas.addEventListener("mousemove", endPath);
	
}

function endPath(ev){
	/*ctx.lineTo(ev.clientX, ev.clientY);
	ctx.stroke();
	console.log("arrivé "+ev.clientX+" "+ ev.clientY);
	ctx.closePath();
	console.log("lève souris");*/
}


function stopPath(ev){
	if(posInitX != null || posInitY != null){

		ctx.moveTo(posInitX, posInitY);
		ctx.lineTo(ev.clientX, ev.clientY);
		ctx.stroke();
		ctx.closePath();

		posInitX= null;
		posInitY= null;
		canvas.removeEventListener("mousemove", endPath);
	}
}


function print(){
	var imagetocanvas= canvas.toDataURL();
	window.open(imagetocanvas);
}

function effacer(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}