// --------------- FUNÇÕES GERAIS --------------- //
function campoObrigatorio(input, label) {
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

// --------------- VALIDAÇÃO DE USUÁRIO/USERNAME --------------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="user"]');
let usernameHelper = document.getElementById("user-helper");

// Função para mostrar/ocultar popup de campo obrigatório
campoObrigatorio(usernameInput, usernameLabel);

// Validar valor do input
usernameInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;

    if(inputValue.length < 8) {
        // Adicionar estilos dinâmicos se o valor tiver menos de 8 caracteres
        estilizarInputIncorreto(usernameInput, usernameHelper);
        usernameHelper.innerText = "Seu nome de usuário precisa ter 8 ou mais caracteres";
        inputsCorretos.usuario = false;
    } else {
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(usernameInput, usernameHelper);
        inputsCorretos.usuario = true;
    }
});

// --------------- VALIDAÇÃO DE EMAIL --------------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Função para mostrar/ocultar popup de campo obrigatório
campoObrigatorio(emailInput, emailLabel);

// Validar valor do input
emailInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;

    if(inputValue.includes("@") && inputValue.includes(".com")) {
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(emailInput, emailHelper);
        inputsCorretos.email = true;
    } else {
        // Adicionar estilos dinâmicos se o valor estiver incorreto
        emailHelper.innerText = "Precisa inserir um e-mail válido";
        estilizarInputIncorreto(emailInput, emailHelper);
        inputsCorretos.email = false;
    }
});

// --------------- VALIDAÇÃO DE SENHA --------------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="pswd"]');
let senhaHelper = document.getElementById("senha-helper");

// Função para mostrar/ocultar popup de campo obrigatório
campoObrigatorio(senhaInput, senhaLabel);

// Validar valor do input
senhaInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;

    if(inputValue.length < 6) {
        // Adicionar estilos dinâmicos se o valor tiver menos de 6 caracteres
        estilizarInputIncorreto(senhaInput, senhaHelper);
        senhaHelper.innerText = "Sua senha precisa ter no mínimo 6 caracteres";
        inputsCorretos.senha = false;
    } else {
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = true;
    }
});

// --------------- VALIDAÇÃO DE CONFIRMAÇÃO DA SENHA --------------- //
let senhaConfirmaInput = document.getElementById("senhaConfirma");
let senhaConfirmaLabel = document.querySelector('label[for="pswdConfirm"]');
let senhaConfirmaHelper = document.getElementById("confirma-senha-helper");

// Função para mostrar/ocultar popup de campo obrigatório
campoObrigatorio(senhaConfirmaInput, senhaConfirmaLabel);

// Validar valor do input
senhaConfirmaInput.addEventListener("input", (e) => {
    let senhaConfirmaValue = e.target.value;

    if(senhaConfirmaValue == senhaInput.value && inputsCorretos.senha == true) {
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(senhaConfirmaInput, senhaConfirmaHelper);
        inputsCorretos.senhaConfirma = true;
    } else {
        // Adicionar estilos dinâmicos se o valor tiver menos de 8 caracteres
        estilizarInputIncorreto(senhaConfirmaInput, senhaConfirmaHelper);
        senhaConfirmaHelper.innerText = "As senhas precisam ser iguais";
        inputsCorretos.senhaConfirma = false;
    }
});

// --------------- EVITAR ENVIO AUTOMÁTICO DO FORMULÁRIO --------------- //
let btnInputSubmit = document.querySelector('input[type="submit"]');
let inputsCorretos = {
    usuario: false,
    email: false,
    senha: false,
    senhaConfirma: false
};

btnInputSubmit.addEventListener("click", (e) => {
    if(inputsCorretos.username == false ||
       inputsCorretos.email == false ||
       inputsCorretos.senha == false ||
       inputsCorretos.senhaConfirma == false) {
       e.preventDefault();
       alert("Você precisa preencher todos os campos obrigatórios");
    } else {
       alert("Cadastro concluído com sucesso!");
    }
});