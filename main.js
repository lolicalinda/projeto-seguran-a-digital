const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = 5;

const botoes = document.querySelectorAll('parametro-senha__botao');

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
campoSenha.value = letrasMaiusculas;

botoes[0].onclik = diminuirTamanho;
botoes[1].onclik = aumentaTamanho;

function diminuirTamanho() {
     if (tamanhoSenha>1) {
    //tamanhoSenha = tamanhoSenha - 1;
    tamanhoSenha--;
     }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha<20) {
   //tamanhoSenha = tamanhoSenha + 1;
   tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);