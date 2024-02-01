const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden');
const element = document.querySelectorAll('background')

elements.forEach( (elements) => myObserver.observe(elements))

/* MENU DESKTOP */

const btnMenu = document.getElementById('btn-menu');
const menuDesktop = document.getElementById('menu-desktop');
const links = menuDesktop.querySelectorAll('a');

btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    btnMenu.classList.toggle('ativar');
    menuDesktop.classList.toggle('abrir');
}

// Adiciona um evento de clique para cada link dentro do menu
links.forEach(link => {
    link.addEventListener('click', fecharMenu);
});

function fecharMenu() {
    btnMenu.classList.remove('ativar');
    menuDesktop.classList.remove('abrir');
}

function toggleCarrinho() {
    var carrinho = document.getElementById("book");
    carrinho.style.display = (carrinho.style.display === "none" || carrinho.style.display === "") ? "block" : "none";
}


function enviarWhatsApp() {
    var nome = document.getElementById('nome').value;
    var pacote = document.getElementById('pacote').value;
    var escrita = document.getElementById('escrita').value;
    var bares = document.getElementById('bares').value;
    var quantidade = document.getElementById('quantidade').value;
    var local = document.getElementById('local').value;
    var date = document.getElementById('data').value;
  
    var mensagem = `Olá, gostaria de um orçamento para o seguinte evento:
  nome: ${nome};
  Pacote: ${pacote};
  adicionais: ${escrita};
  Bares: ${bares};
  Quantidade de Pessoas: ${quantidade};
  Local: ${local};
  Data: ${date}`;
  
    // Substitua 'SEU_NUMERO_DE_TELEFONE' pelo número de WhatsApp para o qual você deseja enviar a mensagem
    var numeroWhatsApp = '+5516993751951';
  
    // Construa o link do WhatsApp com a mensagem
    var linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
    // Abra uma nova janela ou guia do navegador com o link do WhatsApp
    window.open(linkWhatsApp, '_blank');
  }


  $(document).ready(function(){
    $('.bebida').slick({
      autoplay: true, // Ativar autoplay
      autoplaySpeed: 1200, // Velocidade de troca de slides em milissegundos
      slidesToShow: 4, // Quantidade de slides visíveis ao mesmo tempo
      slidesToScroll: 1, // Quantidade de slides a avançar
      responsive: [
        {
          breakpoint: 768, // Para telas menores que 768px
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480, // Para telas menores que 480px
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  
  function mostrarSlide(n) {
      if (n >= slides.length) { slideIndex = 0; }
      if (n < 0) { slideIndex = slides.length - 1; }
      
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      
      slides[slideIndex].style.display = "block";  
  }
  
  function avancaSlide(n) {
      slideIndex += n;
      mostrarSlide(slideIndex);
  }
  
  function autoAvanca() {
      avancaSlide(1);
      setTimeout(autoAvanca, 2000); // Altere o tempo de mudança de slide aqui (em milissegundos)
  }
  
  autoAvanca(); // Inicie o carrossel automático

  function openFullScreen() {
    var elem = document.getElementById("packageDetails");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
