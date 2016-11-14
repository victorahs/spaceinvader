//fonction appellée par lien COMMENCER
function start (){
  joueur = 0;
  scoreTab = [];
  temps = 0;
  vitesse = 0;
  niveau = 0;
  score = 0;
  msgScore = "SCORE : ";
  // var score1 = 20;
  missileTir = false;
  ennemiTab = []; // tableau d'ennemis
  messagefin = "";

  sens = 1;
  vitesse = 200;
  victoire = false;

  nbI = 3;
  nbJ = 3;

  //
  // var init = new initialisation();
  //
  // init.score = 0;
  // init.vitesse = 0;
  // init.victoire = false;
  // init.messagefin = "";

  console.log("are you sure?");
/*					var ecrans = document.querySelectorAll("#accueil, #jeu");
  console.log(ecrans);
for (var i = 0; i < ecrans.length; i++) {
    ecrans[i].classList.toggle("masque");
  }*/

  //accueil ou fin sont affichés et jeu est masqué > on inverse

  document.getElementById("accueil").classList.add("masque");
  document.getElementById("fin").classList.add("masque");
  document.getElementById("jeu").classList.remove("masque");
  document.getElementById("missileId").classList.add("masque");
  //appel de fonction initialisation --------------------------------------------

  document.getElementById("tireurId").style.left=(document.getElementById("espaceJeu").getBoundingClientRect().width/2) - (document.getElementById("tireurId").getBoundingClientRect().width/2)  + "px" ;
  document.getElementById("tireurId").style.top = document.getElementById("espaceJeu").getBoundingClientRect().height - 32 + "px";
  document.getElementById("ennemiId").style.left="0px";
  document.getElementById("ennemiId").style.top="0px";


//  initialisation();

  generationEnnemi();


  document.getElementById("score").innerHTML = msgScore + init.score;



  moveAutoEnnemi("ennemiId");



//ennemiTab =	document.querySelectorAll(".ennemiCl");
}
