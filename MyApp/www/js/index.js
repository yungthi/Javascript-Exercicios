/* 1 - Atualização do exerício de DOM sobre notas do aluno.
Elabore um programa que receba a quantidade de notas(QTN) de
um aluno, e calcule a média aritmética a partir destas notas.
A entrada de notas deve ser dinâmica - determinado pelo usuário.
O cálculo da média deve seguir a mesma ideia, captar de forma
dinâmica a quantidae de inputs gerados para calcular a média.
!O exercício deve ser feito usando um projeto html/js, DOM,
eventListeners. */
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

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