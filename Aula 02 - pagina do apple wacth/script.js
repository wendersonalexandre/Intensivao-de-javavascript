const imagemVisualizacao = document.querySelector("#visualizacao img");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
let tituloProduto = document.querySelector("h1");

const opcoesTamanho = ["41mm", "45mm"];
const opcoesCore = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "Rosa-claro",
];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

function atualizarCorSelecionada() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);

  numCorSelecionada = opcaoCorSelecionada;
  const nomeCor = opcoesCore[numCorSelecionada];
  console.log(nomeCor);
  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    nomeCor.toLowerCase() +
    " para caixa de " +
    opcoesTamanho[numTamanhoSelecionado];

  nomeCorSelecionada.innerText = "Cor - " + nomeCor;

  imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-"
   + nomeCor.toLowerCase() + 
   "/imagem-"
   +numImagemSelecionada +
   ".jpeg";

  imagemMiniatura0.src = "./imagens/opcoes-cores/imagens-"+ nomeCor.toLowerCase() +"/imagem-0.jpeg"

  imagemMiniatura1.src = "./imagens/opcoes-cores/imagens-"+ nomeCor.toLowerCase() +"/imagem-1.jpeg"

  imagemMiniatura2.src = "./imagens/opcoes-cores/imagens-"+ nomeCor.toLowerCase() +"/imagem-0.jpeg"


}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector(' [name="opcao-tamanho"]:checked ')
    .id.charAt(0); // 0 ou 1

  numTamanhoSelecionado = opcaoTamanhoSelecionado;
  const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];
  console.log(tamanhoCaixa)

  tituloProduto.innerText =
    "Pulseira loop esportiva " +
    opcoesCore[numCorSelecionada].toLocaleLowerCase() +
    " para caixa de " +
    tamanhoCaixa;

  if (tamanhoCaixa === "41mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector(' [name="opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-" + opcoesCore[numCorSelecionada].toLowerCase() +"/imagem-" +
    numImagemSelecionada +
    ".jpeg";
}
