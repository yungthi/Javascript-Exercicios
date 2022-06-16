/*2 - Elabore um projeto que tenha três botões:
amarelo,vermelho e azul. Estes botões devem estar
aninhados em uma tag div id="botoes" . Ao clicar nos botões,
deve ser apresentado um alert mostrando a cor
do botão apertado e a mudança do background-color
de um elemento div id="cor" para a cor(nome) do respectivo
botão pressionado.
*/
document.getElementById("azul") . addEventListener("click", function(){
document.querySelector("body").setAttribute("class","azul");
 alert("AZUL!!!!!!");
})

document.getElementById("amarelo") . addEventListener("click", function(){
document.querySelector("body").setAttribute("class","amarelo");
  alert("AMARELO!!!!!!");
})

document.getElementById("vermelho") . addEventListener("click", function(){
document.querySelector("body").setAttribute("class","vermelho");
  alert("VERMELHO!!!!!!");
  
})

  
