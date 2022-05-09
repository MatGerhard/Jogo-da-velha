var jogador, vencedor = null;
var jogador_selec = document.getElementById("jogador-selec");
var vencedor_selec = document.getElementById("vencedor-selec");

mudarJogador('X');

function escolheCampo(id) {
    if (vencedor !== null) {
    return;
}

var campo = document.getElementById(id);
    if (campo.innerHTML !== '-') {
        return;
    }

    campo.innerHTML = jogador;
    campo.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    confVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogador_selec.innerHTML = jogador;
}

function confVencedor(){
    var campo1 = document.getElementById(1);
    var campo2 = document.getElementById(2);
    var campo3 = document.getElementById(3);
    var campo4 = document.getElementById(4);
    var campo5 = document.getElementById(5);
    var campo6 = document.getElementById(6);
    var campo7 = document.getElementById(7);
    var campo8 = document.getElementById(8);
    var campo9 = document.getElementById(9);

    if (checaSequencia(campo1, campo2, campo3)) {
        mudaCorCampo(campo1, campo2, campo3);
        mudarVencedor(campo1);
        return;
    }

    if (checaSequencia(campo4, campo5, campo6)) {
        mudaCorCampo(campo4, campo5, campo6);
        mudarVencedor(campo4);
        return;
    }

    if (checaSequencia(campo7, campo8, campo9)) {
        mudaCorCampo(campo7, campo8, campo9);
        mudarVencedor(campo7);
        return;
    }

    if (checaSequencia(campo1, campo4, campo7)) {
        mudaCorCampo(campo1, campo4, campo7);
        mudarVencedor(campo1);
        return;
    }

    if (checaSequencia(campo2, campo5, campo8)) {
        mudaCorCampo(campo2, campo5, campo8);
        mudarVencedor(campo2);
        return;
    }

    if (checaSequencia(campo3, campo6, campo9)) {
        mudaCorCampo(campo3, campo6, campo9);
        mudarVencedor(campo3);
        return;
    }

    if (checaSequencia(campo1, campo5, campo9)) {
        mudaCorCampo(campo1, campo5, campo9);
        mudarVencedor(campo1);
        return;
    }

    if (checaSequencia(campo3, campo5, campo7)) {
        mudaCorCampo(campo3, campo5, campo7);
        mudarVencedor(campo3);
    }
}

function mudarVencedor(campo) {
    vencedor = campo.innerHTML;
    vencedor_selec.innerHTML = vencedor;
}

function mudaCorCampo(campo1, campo2, campo3) {
    campo1.style.background = 'rgb(80, 255, 159)';
    campo2.style.background = 'rgb(80, 255, 159)';
    campo3.style.background = 'rgb(80, 255, 159)';
}

function checaSequencia(campo1, campo2, campo3) {
    var igual = false;

    if (campo1.innerHTML !== '-' && campo1.innerHTML === campo2.innerHTML && campo2.innerHTML === campo3.innerHTML) {
        igual = true;
    }

    return igual;
}

function reiniciar()
{
    vencedor = null;
    vencedor_selec.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var campo = document.getElementById(i);
        campo.style.background = '#eee';
        campo.style.color = '#eee';
        campo.innerHTML = '-';
    }

    mudarJogador('X');
}