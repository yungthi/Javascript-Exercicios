/*3- Crie um projeto que tenha dois botoes: adicionarParagrafo
e removerParagrafo. A pagina principal conterá uma div id="botoes"
da qual os botões deverão residir. Quando o usuário clicar no botão
adicionarParagrafo, uma tag paragráfo com o conteúdo "Paragráfo vazio"
deve ser criada. Quando o usuário clicar no botão removerParagrafo,
o paragrafo criado deve ser removido ( o elemento inteiro, não so o conteúdo).*/

function CriaFrase() {

    const node = document.createElement("p");
    
    const textnode = document.createTextNode("Palmeiras não tem mundial");
    
    node.appendChild(textnode);
    
    document.getElementById("myList").appendChild(node);
    }
    function DeletarFrase() {
        
        const list = document.getElementById("myList");
        
        list.removeChild(list.firstElementChild);

      }
