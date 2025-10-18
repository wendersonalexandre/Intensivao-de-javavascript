const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");
const proximoCapitulo = document.getElementById("proximo");
const capituloAnterior = document.getElementById("anterior");
const textoCapitulo = document.getElementById("captulo");
let totalCapitulos = 10;
let tocando = false;
let capituloAtual = 1;

function tocarFaixa(){
    audio.play();
    tocando = true;

    botaoPlayPause.classList.add("tocando");
    botaoPlayPause.classList.remove("pausado");
}

function pausarFaixa(){
    audio.pause();
    tocando = false;
    botaoPlayPause.classList.add("pausado");
    botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausar(){
    if(tocando === true){
        pausarFaixa();
    } else{
        tocarFaixa();
    }
}

function proximoCap(){
    pausarFaixa();
  if(capituloAtual < totalCapitulos){
    capituloAtual++;
  } else {
    capituloAtual = 1;
  }

  audio.src = `audios/${capituloAtual}.mp3`;
  textoCapitulo.textContent = `Capitulo ${capituloAtual}`;
  tocarFaixa();
}

function capituloAnt(){
    pausarFaixa();
    if(capituloAtual === 1){
    capituloAtual = totalCapitulos;
  } else {
    capituloAtual--
  }

    audio.src = `audios/${capituloAtual}.mp3`;
    textoCapitulo.textContent = `Capitulo ${capituloAtual}`;
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
proximoCapitulo.addEventListener("click", proximoCap)
capituloAnterior.addEventListener("click", capituloAnt)