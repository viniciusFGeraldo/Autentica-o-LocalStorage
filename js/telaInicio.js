let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logadoInit = document.querySelector('.container-conteudo .logado-init');
let logadoEnd = document.querySelector('.container-conteudo .logado-end');

logadoInit.innerHTML = `Seja Bem-vindo, `;
logadoEnd.innerHTML = `${userLogado.nome}`;

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página');
    window.location.href = "http://127.0.0.1:5500";
}

function sair(){
    localStorage.removeItem('token');
    window.location.href = "http://127.0.0.1:5500";
}