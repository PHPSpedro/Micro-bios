const tirarFormulario = document.querySelector(".mascara-invisivel");
const formularioFaleConosco = document.querySelector(
  "#formulario-fale-conosco"
);

function faleConosco() {
  formularioFaleConosco.style.display = "flex";
  tirarFormulario.style.visibility = "visible";
}
function tirarLogin() {
  tirarFormulario.style.visibility = "hidden";
  formularioFaleConosco.style.display = "none";
}

const imagens = [
  "Imagens/Imagem_principal_um.jpeg ",
  "Imagens/Imagem_principal_dois.jpeg",
  "Imagens/Imagem_principal_tres.jpeg",
];
let indice = 0;

// Função para trocar a imagem
function trocarImagem() {
  indice = (indice + 1) % imagens.length; // Volta ao início ao chegar no final
  document.querySelector(".imagem-principal").src = imagens[indice];
}

// Troca a imagem a cada 3 segundos (3000 milissegundos)
setInterval(trocarImagem, 10000);
