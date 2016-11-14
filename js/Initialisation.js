// initialisation du jeu + variables globales


var joueur = 0;
var scoreTab = [];
var temps = 0;
var vitesse = 0;
var niveau = 0;
var score = 0;
var msgScore = "SCORE : ";
// var score1 = 20;
var missileTir = false;
var ennemiTab = []; // tableau d'ennemis
var messagefin = "";

var sens = 1;
var vitesse = 200;
var victoire = false;

var nbI = 3;
var nbJ = 3;


function initialisation(){

this.joueur = joueur;
this.score = score;
this.temps = temps;
this.vitesse = vitesse;
this.niveau = niveau;
this.scoreTab  = scoreTab;
this.missileTir = missileTir;
this.ennemiTab = ennemiTab;
this.messagefin = messagefin;
this.victoire = victoire;
this.messagefin = messagefin;

// var init = document.getElementById("jeu");
// init.addEventListener("click", start, true);

}


var init = new initialisation();

init.score = 0;
init.vitesse = 0;
init.victoire = false;
init.messagefin = "";


initialisation();
