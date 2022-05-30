
// ANIMATION 
const li = document.querySelectorAll("li");
const logo = document.querySelector("#gd");
const slidehome = document.querySelector(".slidehome");
const iconscroll = document.querySelector(".icon-scroll");
const barreformcomp = document.querySelector(".barreformcomp");
const barreformservice = document.querySelector(".barreformservice");
const barreformcontact = document.querySelector(".barreformcontact");
const TL1 = new TimelineMax({paused:true});

TL1
.staggerFrom(logo,1,{y:-100,opacity:0},0.3)
.staggerFrom(li,1.5,{y:40,opacity:0},0.3,'-=0.2')
.staggerFrom(slidehome,1.5,{y:40,opacity:0},0.3,'-=0.8')
.staggerFrom(iconscroll,1,{y:40,opacity:0},0.3,'-=0.8')
.from(barreformcomp,2,{width:0,ease:"power1.out"})
.from(barreformservice,2,{width:0,ease:"power1.out"})
.from(barreformcontact,2,{width:0,ease:"power1.out"})

TL1.play();

/*window.addEventListener('scroll',()=>{

    const{scrollTop,clientHeight} = document.documentElement;

    const topElementToTopViewport = iconehand.getBoundingClientRect().top;
    const topProjet = iconeprojet.getBoundingClientRect().top;
    const topDraw = iconedraw.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed()-
     clientHeight *0.50){iconehand.classList.add('active')}

    if(scrollTop > (scrollTop + topProjet).toFixed()-
     clientHeight *0.60){iconeprojet.classList.add('active')}

     if(scrollTop > (scrollTop + topDraw).toFixed()-
     clientHeight *0.70){iconedraw.classList.add('active')}


})*/

const sr = ScrollReveal();

sr.reveal('h1',{
    reset: false,
    duration : 2000
});



sr.reveal('.grille',{
    origin:'right',
    distance:'450px',
    reset:true,
    duration:2000
});

//ZOOM FOND SCROLL

// $(window).scroll(function(){

//     var scroll = $(window).scrollTop();
//     $(".fondsite").css({
//         width:(100+scroll/200) + "%",
//         height:(100+scroll/200) + "%"
//     })

// })

function burger(){

    let burger = document.querySelector('.burger i');
    let menu = document.querySelector('.menu');

    burger.addEventListener('click',(e)=>{
        e.preventDefault();
        menu.classList.toggle('menuopen');
    })
    // document.addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     if()
    //     menu.style.display="none";
    // })

}
burger();

//MINIATURE HELP

function help(){
    let containerhelp = document.querySelector('.containerhelp');
    let cadreservice = document.querySelectorAll('.cadreservice');
    let contenuminiature = document.querySelector('.contenuminiature');
    let titreminiature = document.querySelector('#titreminiature');
    for(let i=0;i<cadreservice.length;i++){
        cadreservice[i].addEventListener('mouseover',(e)=>{
            e.preventDefault();
            containerhelp.style.height="10em";
  
            if(i==0){
                titreminiature.innerHTML="Développement web";
                contenuminiature.textContent="Je code votre site en Html, Css, Javascript (Vanilla & JQuery),Php..... Pour l'instant :)";
            }
            if(i==1){
                titreminiature.innerHTML="Projet 100% personnalisé";
                contenuminiature.textContent="Confiez moi votre projet qui sera à la dimension de vos envies et votre entreprise !";
            }
            if(i==2){
                titreminiature.innerHTML="Accompagnement";
                contenuminiature.textContent="Pendant toute la durée de la conception, je communique avec vous, je vous explique les étapes, nous travaillons ensemble !";
            }
            if(i==3){
                titreminiature.innerHTML="Maintenance";
                contenuminiature.textContent="Vous ne vous occupez de rien, je m'occupe de tout !";
            }
        })
        cadreservice[i].addEventListener('mouseout',(e)=>{
            e.preventDefault();
            containerhelp.style.height="0";
        })
    }
    
}
help();