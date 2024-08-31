// Campo de nome

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nomeAjuda");

nomeInput.addEventListener("input", (elemento) => {
    let inputValue = elemento.target.value;

    if(inputValue.length < 3){
        nomeInput.classList.remove("correct");
        nomeInput.classList.add("error");

        nomeHelper.classList.add("visible");
        nomeHelper.innerText = "O campo não pode ser vazio! Insira uma nome válido";
    } else{
        nomeInput.classList.remove("error");
        nomeHelper.classList.remove("visible");
        nomeInput.classList.add("correct");
    }
});

// Campo de email

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("emailAjuda");

emailInput.addEventListener("input", (elemento) => {
    let inputValue = elemento.target.value;

    if(inputValue.includes("@") && inputValue.includes(".com")){
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailInput.classList.add("correct");
    } else{
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.classList.add("visible");
        emailHelper.innerText = "O campo não pode ser vazio! Insira uma e-mail válido";
    }
});