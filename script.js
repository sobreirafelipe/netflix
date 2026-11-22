
let paginaAtual = 0;

// CARROSSEL
function mudarImagem(direcao) {

    const carrossel = document.getElementById("carrossel");
    const secoes = document.querySelectorAll(".secao");

    paginaAtual += direcao;

    if (paginaAtual < 0) {
        paginaAtual = secoes.length - 1;
    }

    if (paginaAtual >= secoes.length) {
        paginaAtual = 0;
    }

    carrossel.scrollTo({
        left: paginaAtual * carrossel.clientWidth,
        behavior: "smooth"
    });
}

// SOM TUNDUM AO CLICAR NO MENU SUPERIOR
const topo = document.querySelector(".topo-menu");

topo.addEventListener("click", () => {

    const som = new Audio("Audio/Tundum.mp3");

    som.play().catch(erro => {
        console.log("Não foi possível reproduzir o áudio:", erro);
    });

});

// VÍDEO PRINCIPAL
const video = document.querySelector("video");

video.addEventListener("click", () => {

    video.muted = false;
    video.volume = 1;

    video.play();

});

