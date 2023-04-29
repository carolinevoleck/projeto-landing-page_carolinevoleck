//adicionando  os elementos do html
let botaoContratarAqui = document.querySelector(".contratarAqui")

let list = document.querySelectorAll("li")

// add event ao button contratar
botaoContratarAqui.addEventListener('click', function(){
    alert("Obrigada pela confiança em nossos serviços, em breve entraremos em contato")
 console.log(botaoContratarAqui)
 })

 //add event a list
 let body = document.body

 let imagem1 = new Image()
    imagem1.src = "team-spirit-207319_960_720.jpg"

 let imagem2 = new Image()
    imagem2.src = "EYuK.gif"

 let imagem3 = new Image()
    imagem3.src = "coins-912278_960_720.jpg"
                
function alterarImagem(imagem) {
    body.style.backgroundImage = "url('" + imagem.src + "')"
    }

//dados do input
function verificarDados() {
	const inputEmail = document.getElementById("email")
	const inputTelefone = document.getElementById("telefone")
	const email = inputEmail.value;
	const telefone = inputTelefone.value;

			if (email.trim() !== "" && telefone.trim() !== "") {
				alert(`Entraremos em contato através do endereço ${email}`)
				inputEmail.value = ""
				inputTelefone.value = ""
			} else {
				alert("Por favor, digite seu e-mail e telefone.")
			}
		}       

