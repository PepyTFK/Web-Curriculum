const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        } else{
            element.classList.remove(animationClass)
        }
    })
};

animeScroll();

if(target.length){

window.addEventListener('scroll' , function(){
    animeScroll();
})

}


//-------------------------------------------------------------

const perfil = document.querySelector('[data-load]')

function animeLoaded (){
    if(window.onload){
        perfil.classList.add('animated')
    } 
}

window.onload = function (){
    animeLoaded();
}

//-----------------------------------------

const aviso = document.querySelector('.avisation')

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
    aviso.style.display = "none"
    } 

}
    
)


