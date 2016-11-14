// génération des ennemis et stockage dans un tableau

function generationEnnemi(){


      var ennemiSelection = document.getElementById('ennemiId');
      // var gpEnnemi = [];
      var html = "";
      var nb = 0;

      for(i=0; i<=nbI; i++)
      {
          nb = 0;
          for(j=0; j<nbJ; j++)
          {
            html += "<img data-score='0' class='ennemiCl' id='ennemiId" + i + (j + nb) +"' src='img/invadersviolet.png' " + "style='left:" + j*7.5 +"em; top:"+ i*2+"em;'" + "/>";
            html += "<img data-score='1' class='ennemiCl' id='ennemiId" + i + (j + nb + 1) +"' src='img/invadersblanc.png' " + "style='left:" + (j*7.5 + 2.5) +"em; top:"+ i*2+"em;'" + "/>";
            html += "<img data-score='2' class='ennemiCl' id='ennemiId" + i + (j + nb + 2)+"' src='img/invadersbleu.png' " + "style='left:" + (j*7.5 + 5) +"em; top:"+ i*2+"em;'" + "/>";
            nb = j + 2;
          }


      }

      ennemiSelection.innerHTML = html;

}
