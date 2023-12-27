let nome = document.querySelector('#nome');
let labelnome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelusuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let dataNasc = document.querySelector('#dataNascimento');

let genero = document.querySelector('#genero');

let email = document.querySelector("#email");
let labelemail = document.querySelector('#labelEmail');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let validEmail = false;

let senha = document.querySelector('#senha');
let labelsenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmarSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validconfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        labelnome.setAttribute('style', 'color:red');
        labelnome.innerHTML='Nome: Insira um Nome com no mínimo 3 letras';
        nome.setAttribute('style', 'border-color:red');
        validNome = false;
    }else{
        labelnome.setAttribute('style', 'color:green');
        labelnome.innerHTML='Nome: ';
        nome.setAttribute('style', 'border-color:green');
        validNome = true;
    }
})
usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length <= 4){
        labelusuario.setAttribute('style', 'color:red');
        labelusuario.innerHTML='Usuário: Insira um usuário com no mínimo 5 letras';
        usuario.setAttribute('style', 'border-color:red');
        validUsuario = false;
    }else{
        labelusuario.setAttribute('style', 'color:green');
        labelusuario.innerHTML='Usuário: ';
        usuario.setAttribute('style', 'border-color:green');
        validUsuario = true;
    }
})
email.addEventListener('keyup', ()=>{
    if(!emailRegex.test(email.value)){
        labelemail.setAttribute('style', 'color:red');
        labelemail.innerHTML = 'E-mail: e-mail inválido';
        email.setAttribute('style', 'border-color:red');
        validEmail = false;
    }else{
        labelemail.setAttribute('style', 'color:green');
        labelemail.innerHTML = 'E-mail: ';
        email.setAttribute('style', 'border-color:green');
        validEmail = true;
    }
})

senha.addEventListener('keyup', () => {
    const senhaValue = senha.value;

    const senhaValida = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(senhaValue);

    if (senhaValue.length < 8 || !senhaValida) {
        labelsenha.setAttribute('style', 'color:red');
        labelsenha.innerHTML = 'Senha: Insira uma senha com pelo menos 8 caracteres, incluindo pelo menos 1 caractere especial e 1 número';
        senha.setAttribute('style', 'border-color:red');
        validSenha = false;
    } else {
        labelsenha.setAttribute('style', 'color:green');
        labelsenha.innerHTML = 'Senha: ';
        senha.setAttribute('style', 'border-color:green');
        validSenha = true;
    }
});
confirmSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color:red');
        labelConfirmSenha.innerHTML='Confirmar Senha: as senhas não são compatíveis';
        confirmSenha.setAttribute('style', 'border-color:red');
        validconfirmSenha = false;
    }else{
        labelConfirmSenha.setAttribute('style', 'color:green');
        labelConfirmSenha.innerHTML='Confirmar Senha: ';
        confirmSenha.setAttribute('style', 'border-color:green');
        validconfirmSenha = true;
    }
})
function cadastrar(event){
    event.preventDefault();
    if(validNome && validUsuario && validEmail && validSenha && validconfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            nome: nome.value,
            usuario: usuario.value,
            dataNasc: dataNasc.value,
            sexo: genero.value,
            email: email.value,
            senha: senha.value

        })
        localStorage.setItem("listaUser",JSON.stringify(listaUser));

            msgError.setAttribute('style', 'display:none');
            msgError.innerHTML = '';
            msgSuccess.setAttribute('style', 'display:block');
            msgSuccess.innerHTML = '<strong>Cadastrado com sucesso.</strong>';

            setTimeout(function() {
                window.location.href = 'http://127.0.0.1:5500';
            }, 3000);
            
           
        }else{
            msgSuccess.setAttribute('style', 'display:none');
            msgSuccess.innerHTML = '';
            msgError.setAttribute('style', 'display:block');
            msgError.innerHTML = '<strong>Preencha todos os campos corretamente.</strong>';
        }
}




