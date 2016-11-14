function intersectElem (id1, id2){
	// renvoie vrai si les elements id1 et id2 se touchent, sinon faux

	var elem1 = document.getElementById(id1).getBoundingClientRect();
	var elem2 = document.getElementById(id2).getBoundingClientRect();

	return (elem1.left <= elem2.right && elem2.left <= elem1.right && elem2.top <= elem1.bottom);
}




function destructionElem(id){
	//supprime un ennemi s'il est touché par le missile id
 	ennemiTab =	document.querySelectorAll(".ennemiCl");
 	console.log(ennemiTab.length);

 	//for (var i = ennemiTab.length; i >= 0; i--)
	//on parcours le tableau depuis la fin
 	for (var i = 0; i < ennemiTab.length ; i++)
 	{
 		if (intersectElem(ennemiTab[i].id, id))
		{
		// si les éléments se touchent, on supprime l'ennemi id1 dans le bloc d'ennemis "ennemiId" et on augmente le score selon le type

			//debug :
			console.log("touché");
			generatScore(ennemiTab[i].id);
			JouerSon("explose");
			document.getElementById("ennemiId").removeChild(document.getElementById(ennemiTab[i].id));

			// si le tableau d'ennemi est vide alors VICTOIRE !

			if (ennemiTab.length == 1)
			{
			//document.getElementById("fin").classList.remove("masque");
			messageFin = "Victoire !!<br /> vous avez eliminez tous les envahisseurs";
			victoire = true;


			finJeu ();
			return true;
			}


			// on augmente le score de 10pt
			//bonus : nombre de points différents selon le type d'ennemi
			// score += 10;
			return true;
		}

 	}


}

function moveAutoEnnemi(id) {
	if(!victoire){
console.log("c'est la dech");
	var obj = document.getElementById(id);
	var topVal = parseInt(obj.style.left, 10);
    var margeDroite=0;
    var margeGauche=9999;
		var margeBas=0;
    ennemiTab=document.querySelectorAll(".ennemiCl");
	//console.log(ennemiTab);
    for(var i=0; i<ennemiTab.length;i++){
        if(margeDroite<ennemiTab[i].getBoundingClientRect().right)
        {
            margeDroite = ennemiTab[i].getBoundingClientRect().right;
            //sens=1;
        }
        if(margeGauche>ennemiTab[i].getBoundingClientRect().left)
            {
               margeGauche = ennemiTab[i].getBoundingClientRect().left;
               // sens=-1;
            }
				if(margeBas<ennemiTab[i].getBoundingClientRect().bottom)
				{
						margeBas = ennemiTab[i].getBoundingClientRect().bottom;
						//sens=1;
				}
    }

    //console.log(sens);
   // console.log(margeDroite, margeGauche);

	if(margeDroite <= document.getElementById("jeu").getBoundingClientRect().right-5 && margeGauche+5 >= document.getElementById("jeu").getBoundingClientRect().left )
	//si les aliens touchent pas à droite et ils ne touchent à gauche
	{
        obj.style.left= (topVal + sens * 10) + "px";
        topVal = parseInt(obj.style.left, 10);

        console.log("Attaque maison! attaque maison !");
        console.log(margeGauche);

		setTimeout(moveAutoEnnemi,vitesse,id); //on appelle la fonction moveAuto avec un delai de 150ms

	}
    else if(margeBas < document.getElementById("espaceJeu").getBoundingClientRect().bottom*0.9 )
    // si on est au dessus de la lmite de Game Over
    {

        obj.style.top = (parseInt(obj.style.top, 10) + ennemiTab[0].getBoundingClientRect().height ) + "px";

        obj.style.left= (topVal  - sens * 10) + "px";
        topVal = parseInt(obj.style.left, 10);
        sens*=-1;
				vitesse -= 10;

        console.log("zut les aliens se barrent!");

        setTimeout(moveAutoEnnemi,vitesse,id);
    }
	else
    //Defaite
    {
        console.log("oh oh!");
      //  document.getElementById("jeu").classList.add("masque");
      //  document.getElementById("fin").classList.remove("masque");
				//
        messageFin = "GAME OVER";
				finJeu ();


    }
	}
}
