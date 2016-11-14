document.addEventListener('keydown', function (e) { // récupération des touches appuyer par l'utilisateur


console.log(e);
var key = e.which || e.keyCode;

if (key === 13) { // 13 is enter

 alert("Pause...appuyer sur entrée pour reprendre");
}

if(key === 32){
    //alert("spacebar");

    JouerSon("shoot");
    tir();
    //moveAuto("missileId");
}
if(key === 39){

if((parseInt(document.getElementById("tireurId").style.left,10) < document.getElementById("jeu").clientWidth -document.getElementById("tireurId").clientWidth - 10))
	{// limite a droite (-5=taille du déplacement)

	   move("tireurId", "right");
	}
}

if(key === 37){
	if(parseInt(document.getElementById("tireurId").style.left,10)-10 > 0){//limite a gauche
	   move("tireurId", "left");
	}
}

});
