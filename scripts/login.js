// Campo de Usuário

let usernameInput = document.getElementById("user");
let usernameLabel = document.querySelector('label[for="user"]');
let usernameHelper = document.getElementById("userAjuda");

usernameInput.addEventListener("focus", () => {
    usernameLabel.classList.add("required-popup")
});

usernameInput.addEventListener("blur", () => {
    usernameLabel.classList.remove("required-popup")
});

usernameInput.addEventListener("input", (elemento) => {
    let inputValue = elemento.target.value;

    if(inputValue.length < 8){
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");

        usernameHelper.classList.add("visible");
        usernameHelper.innerText = "O campo de usuário precisa ter pelo menos 8 caracteres";
    } else{
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameInput.classList.add("correct");
    }
});

// Campo de Senha

let senhaInput = document.getElementById("pswd");
let senhaLabel = document.querySelector('label[for="pswd"]');
let senhaHelper = document.getElementById("senhaAjuda");

senhaInput.addEventListener("focus", () => {
    senhaLabel.classList.add("required-popup")
});

senhaInput.addEventListener("blur", () => {
    senhaLabel.classList.remove("required-popup")
});

senhaInput.addEventListener("input", (elemento) => {
    let inputValue = elemento.target.value;

    if(inputValue.length < 6){
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error");

        senhaHelper.classList.add("visible");
        senhaHelper.innerText = "A senha deve ter pelo menos 6 caracteres";
    } else{
        senhaInput.classList.remove("error");
        senhaHelper.classList.remove("visible");
        senhaInput.classList.add("correct");
    }
});