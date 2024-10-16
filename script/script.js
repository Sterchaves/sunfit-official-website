// MAIN SLIDE
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length -1;

next.onclick = function(){
    if(active + 1>lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }

    reloadSlider()
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }

    reloadSlider()
}

let refreshSlider = setInterval(()=>{
    next.click()
}, 5000)

function reloadSlider(){
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active')
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()}, 3000);
}

dots.forEach((li, key)=>{
    li.addEventListener('click', function(){
        active = key;
        reloadSlider()
    })
}) 



// SWIPER
// Tranding Product Slider-start
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Tranding Product Slider-end


// MENU BURGUER
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

document.addEventListener('click', function(event) {
  const nav = document.querySelector('nav');
  const burger = document.getElementById('burger');
  const header = document.querySelector('header');

  // Verifica se o clique foi fora do header (e do menu)
  if (!header.contains(event.target) && nav.classList.contains('active')) {
    nav.classList.remove('active'); // Fecha o menu
  }
});


// FAQ
const itensPerguntasERespostas = document.querySelectorAll(".category");

itensPerguntasERespostas.forEach(function(item) {
    const pergunta = item.querySelector(".pergunta"); // Seleciona a pergunta dentro da categoria
    const resposta = item.querySelector(".resposta"); // Seleciona a resposta correspondente

    pergunta.addEventListener("click", function() {
        // Remove a classe 'ativo' de todas as categorias
        itensPerguntasERespostas.forEach(function(otherItem) {
            otherItem.classList.remove("ativo"); // Remove a classe 'ativo' de todas as categorias
            const otherResposta = otherItem.querySelector(".resposta");
            if (otherResposta !== resposta) {
                otherResposta.style.display = "none"; // Fecha as outras respostas
            }
        });

        // Alterna a visibilidade da resposta atual
        if (resposta.style.display === "none" || resposta.style.display === "") {
            resposta.style.display = "block"; // Exibe a resposta clicada
            item.classList.add("ativo"); // Adiciona a classe 'ativo' ao item clicado
        } else {
            resposta.style.display = "none"; // Oculta a resposta se já estiver aberta
            item.classList.remove("ativo"); // Remove a classe 'ativo' se o item for fechado
        }
    });
});


