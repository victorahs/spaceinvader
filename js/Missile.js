
function moveAuto(id) {

	var obj = document.getElementById(id);
	var topVal = parseInt(obj.style.top, 10);
	var sens = -1;

	//console.log(ennemiTab);
	obj.style.top= (topVal + sens*10) + "px";
	topVal = parseInt(obj.style.top, 10);

	if(topVal > -10 && !destructionElem(id))
	//si le missile n'est pas en haut de l'espace de jeu et il n'a pas touché d'ennemis
	{
		missileTir = true;
		setTimeout(moveAuto,30,id); //on appelle la fonction moveAuto avec un delai de 150ms
	}
	else
	{ // le missile est en haut ou il a touché un ennemi
		//destruction missile donc on le masque
		console.log("kaboum!!!");
		missileTir = false;
		obj.classList.add("masque");
 	}

}

function tir(){
	if(!missileTir) // si aucun missile en cours
	{
		console.log("boum!");

		document.getElementById("missileId").style.left=document.getElementById("tireurId").offsetLeft + (document.getElementById("tireurId").offsetWidth/2) + "px";
		document.getElementById("missileId").style.top=document.getElementById("tireurId").style.top;

		document.getElementById("missileId").classList.remove("masque");
		moveAuto("missileId");

	}

}
