function melanger(){
	var boule=document.getElementById("boule");

	boule.style.left= '150px';

	var boites= document.getElementById("div_boite").getElementsByTagName("div");
	console.log(boites);

	for(var i=0; i<boites.length-1 ;i++){
		boites[i].style.top="50px";
	}
}