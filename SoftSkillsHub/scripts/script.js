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
    