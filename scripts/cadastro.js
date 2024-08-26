// ------- FUNÇÕES GERAIS ------- //
function togglePopup(input, label) {
    // Mostrar pop-up de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("campo-obrigatorio")
    });

    // Ocultar pop-up de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("campo-obrigatorio")
    });
};

function estilizarInputCorreto(input, helper) {
    input.classList.remove("error");
    helper.classList.remove("visible");
    input.classList.add("correct");
};

function estilizarInputIncorreto(input, helper) {
    input.classList.remove("correct");
    input.classList.add("error");
    helper.classList.add("visible");
};

// ------- VALIDAÇÃO USERNAME ------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="user"]');
let usernameHelper = document.getElementById("user-helper");

// Função para mostrar/ocultar popup de campo obrigatório
togglePopup(usernameInput, usernameLabel);

// Validar valor do input
usernameInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;

    if(inputValue.length < 6) {
        // Adicionar estilos dinâmicos se o valor tiver menos de 6 caracteres
        estilizarInputIncorreto(usernameInput, usernameHelper);
        usernameHelper.innerText = "Seu nome de usuário precisa ter 6 ou mais caracteres";
    } else {
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(usernameInput, usernameHelper);
    }
});

// ------- VALIDAÇÃO EMAIL ------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Função para mostrar/ocultar popup de campo obrigatório
togglePopup(emailInput, emailLabel);

// Validar valor do input
emailInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;

    if(inputValue.includes("@") && inputValue.includes(".com")) {
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(emailInput, emailHelper);
    } else {
        // Adicionar estilos dinâmicos se o valor estiver incorreto
        emailHelper.innerText = "Precisa inserir um e-mail válido";
        estilizarInputIncorreto(emailInput, emailHelper);
    }
});

// ------- VALIDAÇÃO SENHA ------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="pswd"]');
let senhaHelper = document.getElementById("senha-helper");

// Função para mostrar/ocultar popup de campo obrigatório
togglePopup(senhaInput, senhaLabel);

// Validar valor do input
senhaInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;

    if(inputValue.length < 8) {
        // Adicionar estilos dinâmicos se o valor tiver menos de 8 caracteres
        estilizarInputIncorreto(senhaInput, senhaHelper);
        senhaHelper.innerText = "Sua senha precisa ter no mínimo 8 caracteres";
    } else {
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(senhaInput, senhaHelper);
    }
});