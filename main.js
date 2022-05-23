
// ANIMATION 
const logo = document.querySelector(".logo");
const slidehome = document.querySelector(".slidehome");
const iconscroll = document.querySelector(".icon-scroll");
const barreformprojet = document.querySelector(".barreformprojet");
const iconehand = document.querySelector(".iconehand");
const iconeprojet = document.querySelector(".iconeprojet");
const iconedraw = document.querySelector(".iconedraw");
const barreformusine = document.querySelector(".barreformusine");
const barreformreal = document.querySelector(".barreformreal");
const barreformcontact = document.querySelector(".barreformcontact");
const map = document.querySelector("iframe");
const TL1 = new TimelineMax({paused:true});

TL1
.staggerFrom(logo,1,{y:-100,opacity:0},0.3)
.staggerFrom(slidehome,1.5,{y:40,opacity:0},0.3,'-=0.8')
.staggerFrom(iconscroll,1,{y:40,opacity:0},0.3,'-=0.8')
.from(barreformprojet,2,{width:0,ease:"power1.out"})
.from(barreformusine,2,{width:0,ease:"power1.out"})
.from(barreformreal,2,{width:0,ease:"power1.out"})
.from(barreformcontact,2,{width:0,ease:"power1.out"})
.from(map,2,{y:60,opacity:0}, '-=2')

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


// ANIMATION PROJET
const sr = ScrollReveal();

sr.reveal('h1',{
    reset: false,
    duration : 3000
});

sr.reveal('.iconehand',{
    origin:'left',
    distance:'50px',
    reset: true,
    duration : 2000
});

sr.reveal('.iconeprojet',{
    origin:'left',
    distance:'50px',
    reset: true,
    duration : 2000
});

sr.reveal('.iconedraw',{
    origin:'left',
    distance:'50px',
    reset: true,
    duration : 2000
});

sr.reveal('img.usine1',{
    origin:'right',
    distance:'400px',
    reset:true,
    duration:2000
});

sr.reveal('.grille',{
    origin:'right',
    distance:'50px',
    reset:true,
    duration:3000
});

//ZOOM FOND SCROLL

$(window).scroll(function(){

    var scroll = $(window).scrollTop();
    $(".fondsite").css({
        width:(100+scroll/200) + "%",
        height:(100+scroll/200) + "%"
    })

})


