// Elemento onde o conteúdo será inserido
const loginContainer = document.getElementById('login-container');

// Função para renderizar o formulário de login
function renderLoginForm() {
    const loginForm = `
        <div style="display: flex; align-items: center; height: 100vh;">
            <div style="flex: 1; background-color: #fff;">
                <img src="logo.png" alt="Logo" style="width: 70%; display: block; margin: 0 auto;">
            </div>
            <div style="flex: 1; background-color: #00A2E8; padding: 50px; color: #fff;">
                <h1>Hi Community</h1>
                <form id="loginForm">
                    <div style="margin-bottom: 20px;">
                        <label for="username">Usuário</label>
                        <input type="text" id="username" name="username" required style="width: 100%; padding: 10px;">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label for="password">Senha</label>
                        <input type="password" id="password" name="password" required style="width: 100%; padding: 10px;">
                    </div>
                    <button type="submit" style="background-color: #FFD700; padding: 10px 20px; border: none; color: #000; cursor: pointer;">Entrar</button>
                    <p style="margin-top: 20px;"><a href="#" style="color: #fff; text-decoration: underline;">Ainda não possui uma conta? Cadastre-se</a></p>
                </form>
            </div>
        </div>
    `;

    loginContainer.innerHTML = loginForm;
}

// Função para validar o formulário de login
function validateLoginForm(event) {
    event.preventDefault(); // Previne o envio do formulário

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar outras validações, como comprimento mínimo de senha, etc.

    // Se tudo estiver ok, prossiga com o login (aqui você pode adicionar uma requisição para o servidor, por exemplo)
    alert("Login bem-sucedido!"); // Placeholder para uma ação real
}

// Chama a função para renderizar o formulário ao carregar o script
renderLoginForm();

// Adiciona o event listener para a validação do formulário
document.getElementById('login-container').addEventListener('submit', validateLoginForm);
