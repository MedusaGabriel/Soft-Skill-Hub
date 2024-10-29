console.log("Bem-vindo ao Soft Skills Hub!");

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('Scrolling', window.scrollY > 500) 
    })


window.addEventListener("scroll", function() {
    let footer = document.querySelector('footer');
    let scrollPosition = window.scrollY + window.innerHeight; // Posição atual do scroll mais a altura da janela
    let pageHeight = document.documentElement.scrollHeight; // Altura total da página
    
    if (scrollPosition > pageHeight - 100) { // Altere '100' conforme necessário para ajustar a sensibilidade
        footer.classList.add('ShowFooter');
    } else {
        footer.classList.remove('ShowFooter');
    }
});


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-cadastro');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () =>{   
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});