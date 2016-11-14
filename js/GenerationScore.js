function generatScore(idobj){
  console.log(idobj);
  elem = document.getElementById(idobj);
  var scoreJoueur = document.getElementById('score');
 console.log(elem);
 // alert("blabla");
  var type = elem.dataset.score;

  if (type == 0){
    console.log("HELLOWORLD");
    score += 10;
    console.log(elem.dataset.score);

  }


  if (type == 1){
    console.log("COUCOU");

    score += 20;


  }

  if (type == 2){

    score += 30;


  }

  scoreJoueur.innerHTML = msgScore + score;
}
