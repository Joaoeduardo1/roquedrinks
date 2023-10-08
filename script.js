let bookIcon = document.querySelector("#book-icon");
let book = document.querySelector(".book");
let closeBook = document.querySelector("#close-book");

// Open Cart
bookIcon.onclick = () => {
  book.classList.add("active");
};

// Close Cart
closeBook.onclick = () => {
  book.classList.remove("active");
};

// Cart Working JS
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Você também pode adicionar funcionalidade para fechar o modal pressionando a tecla Esc
document.addEventListener("keydown", function(event) {
  var modal = document.getElementById("modal");
  if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
  }
});

// Event listener para o botão de fechar o carrinho
document.getElementById("close-book").addEventListener("click", function() {
  var book = document.querySelector(".book");
  book.style.display = "";
});




function expandImage(imgElement) {
  // Exibir o modal
  var modal = document.getElementById("modal");
  modal.style.display = "block";

  // Definir a imagem ampliada no modal
  var expandedImg = document.getElementById("expandedImg");
  expandedImg.src = imgElement.src;
}

function closeModal() {
  // Fechar o modal
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Substitua 'SEU_NUMERO' pelo número de telefone para o qual deseja enviar a mensagem
function enviarWhatsApp() {
  var nome = document.getElementById('nome').value;
  var pacote = document.getElementById('pacote').value;
  var balcao = document.getElementById('balcao').value;
  var quantidade = document.getElementById('quantidade').value;
  var local = document.getElementById('local').value;
  var date = document.getElementById('date').value;

  var mensagem = `Olá, gostaria de um orçamento para o seguinte evento:
Nome: ${nome}
Pacote: ${pacote}
Balcão: ${balcao}
Quantidade de Pessoas: ${quantidade}
Local: ${local}
Data: ${date}`;

  // Substitua 'SEU_NUMERO_DE_TELEFONE' pelo número de WhatsApp para o qual você deseja enviar a mensagem
  var numeroWhatsApp = '+5516993751951';

  // Construa o link do WhatsApp com a mensagem
  var linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  // Abra uma nova janela ou guia do navegador com o link do WhatsApp
  window.open(linkWhatsApp, '_blank');
}
