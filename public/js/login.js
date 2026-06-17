// Esta constante que buscará as informações na URL para erro, sucessso e outros processos
const parametros = new URLSearchParams(window.location.search);

// Caso ele receba "erro" vindo da URL
const erro = parametros.get('erro');

// Caso ele receba "cadastro" vindo da URL
const cadastro = parametros.get('cadastro');

// "erro" e "cadastro", serão as CHAVES. Agora precisamos testar as condições dos valores para cada uma dedas.

// Aqui, caso em nossa URL apareça o query param = cadastro=sucesso, 
// O usuário verá uma mensagem acima do formulário de login, dizendo que ele já pode fazer a realização do login, confirmando o cadastro bem sucedido.
if (cadastro === "sucesso") {
    document.getElementById("mensagem").innerHTML = `
        <div class="mensagem sucesso">
            Cadastro realizado com sucesso! Faça o login para continuar.
        </div>
    `;
}

if (erro = "login") {
    document.getElementById("mensagem").innerHTML = `
        <div class="mensagem-erro">
            E-mail ou senha inválidos
        </div>
    `;
}