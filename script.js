//adicionando  os elementos do html
let botaoContratarAqui = document.querySelector(".contratarAqui")
console.log(botaoContratarAqui)


let botaoEnviar = document.querySelector(".enviar")
console.log(botaoEnviar)

let list = document.querySelectorAll("li")
console.log(list)

// add event ao button enviar
botaoEnviar.addEventListener('click', function(){
   alert("Enviado com sucesso!")
console.log(botaoEnviar)
})


// add event ao button contratar
botaoContratarAqui.addEventListener('click', function(){
    alert("Obrigada pela confiança em nossos serviços, em breve entraremos em contato")
 console.log(botaoContratarAqui)
 })


 //add event a list
 let body = document.body;

 let imagem1 = new Image();
    imagem1.src = "team-spirit-207319_960_720.jpg";

 let imagem2 = new Image();
    imagem2.src = "destination-1285851_960_720.webp";

 let imagem3 = new Image();
    imagem3.src = "coins-912278_960_720.jpg";
                
function alterarImagem(imagem) {
    body.style.backgroundImage = "url('" + imagem.src + "')";
    }
                  