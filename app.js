let listaDeNumerosSorteados = [];
let numeriLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número secreto' ) ;
    
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        
        let mensagemTentativas = `Voce descobriu o  numero secreto com ${tentativas} ${palavraTentativa}! e Acaba de ganhar um Iphone 16!`;

         
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let NumeroEscolhido;
    do {
        NumeroEscolhido = parseInt(Math.random() * numeriLimite + 1);
    } while (listaDeNumerosSorteados.includes(NumeroEscolhido));

    listaDeNumerosSorteados.push(NumeroEscolhido);
    if (listaDeNumerosSorteados.length > 3) {
        listaDeNumerosSorteados = [];
    }
    console.log(listaDeNumerosSorteados);
    return NumeroEscolhido;
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();