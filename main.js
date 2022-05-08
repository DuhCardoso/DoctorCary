
//EVITAR O ERRO NO CONSOLE CAUSADO PELO SCROLL
window.addEventListener('scroll', onScroll)
    //assim fazemos o evento 'scroll' ser adicionado quando iniciamos a func onScroll, nos permitindo tirar o class do body.

onScroll()
    //acionando uma vez o onScroll no inicio, quando a pagina estive scrollada n tera o erro da barra de navegação






//CABEÇALHO & BACK TO TOP
function onScroll(){
    showButtonBackToTop()
    showNavOnScroll()


    activateMenuItens(home)
    activateMenuItens(services)
    activateMenuItens(about)
    activateMenuItens(contact)


}

function showNavOnScroll() {
    if(scrollY > 0){
        navigation.classList.add('scroll')
    // desse jeito alteramos a tag <nav> do HTML, adcionando e removendo uma class a ela.
    //  1. para selecionamos ela aqui usamos o id "navigation" adicionado a tag.   2. Depois utilizamos o comando ".classList " para acessamor a lista de class   3. usamos ".add" para adicionar uma class nova a tag <nav>.
    }else{
        navigation.classList.remove('scroll')
    //  1. usamos ".remove" para remover uma class da tag <nav>.
    }
}


function activateMenuItens(section){

    const targetLine = scrollY + innerHeight /2
    // uma const é uma var que n pode ser alterada
        //o calculo feito nela é a soma da altura do scroll + a altura da Viwerport, esse valor dividido pela meta (/2), cria uma linha imaginaria no centro da viwerport



    //vericar se a seção passou da linha
        // para ver onde cada seção começa usamdo console.log(home.offsetTop), assim vemos onde a seção HOME começa, podemos alterar 'home' pelo id da seção que vc quer saber os dados de altura
        // Home=0; Services=831
    



    //Pegar uma tag sem ID
    
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionEnd = sectionTop + sectionHeight;


    const sectionTopReachOrPassedTargetLine = targetLine>=sectionTop;
    const sectionEndPassedTargetLine = targetLine>=sectionEnd;
    



    const menuElement = 
    document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`);
                     // ${} serve para pegar uma codigo JS (nesse caso Var)

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine 

    
    menuElement.classList.remove('active')

    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}


function showButtonBackToTop(){
    if(scrollY > 400){
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
}






//MENU
function openMenu(){
    document.body.classList.add('menu-expanded')
    //  adiciona a class 'menu-expanded' que faz com que o menu abra
}
function closeMenu(){
    document.body.classList.remove('menu-expanded')
    //  remove a class 'menu-expanded' que faz com que o menu feche
}







//SCROLLREVEL

ScrollReveal({
    origin: "top",
    //direção que ele surge
    distance: "3rem",
    //distancia que ele surge
    duration: 1200,
    //duração
}).reveal(`
#home,
#home img,
#home .stats,

#services,
#services .card,

#about,
#about header,
#about .content p,
#about .content img,

#contact,
#contact header,
#contact .content ul,
#contact .content a,
#contact .content img`)
// ´´ (acento agudo) permite quebra de linha 


