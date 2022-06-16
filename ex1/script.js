var gerarCampo = document.getElementById("gerar");
gerarCampo.addEventListener("click", gerarb, false);

var nota = document.getElementById("calc");
nota.addEventListener("click", notad, false);

function gerarb(){
    var x = parseInt(document.getElementById("nota").value);
     for (var i = 0; i < x; i++)
     {
        var valor = document.createElement("input");
        valor.setAttribute("id", "enviar" + i);
        document.body.appendChild(valor);
     }
}

function notad(){
  var x = parseInt(document.getElementById("nota").value);
  var adc = document.getElementById("calc");
  var notinha = 0;
  var total;

  for (var i= 0; i < x; i++){
     total= parseFloat(document.getElementById("enviar" + i).value);
     notinha = notinha + total;
}
     notinha = notinha / i;

      if(notinha>=6){
      alert("Você foi aprovado");
      }    
      else if ((notinha >= 4) && (notinha <=6)){
      alert("Você está de recuperação, estude mais! ");
    }
      else{
      alert("Reprovado.");
    }
}



