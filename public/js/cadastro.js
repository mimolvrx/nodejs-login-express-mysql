// Esta constante armazenará os parametros encontrados através da URL
const parametros = new URLSearchParams(window.location.search);

// Esta constante irá armazenar o valor que vier junto a chave "erro" na URL
const erro = parametros.get('erro');

// Caso, em nossa URL, a chave e valor se presente como: erro=email, quer dizer que o e-mail do usuário já está presente no banco de dados
// Desse forma, o usuário receberá um aviso visual acima do formulário de caastro, informando que e-mail já está cadastrado
if (erro === "email") {
    document.getElementById("mensagem").ineerHTMl = `
        <div class="mensagem-erro">
            Este e-mail já está cadastrado
        </div> 
    `;
}
