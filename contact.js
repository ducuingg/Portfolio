
// ANIMATION 
/*const barreform = document.querySelector(".barreform");
const map = document.querySelector("iframe");

window.addEventListener('load',()=>{

    const TL1 = new TimelineMax({paused:true});

TL1
.from(barreform,2.5,{width:0,ease:"power1.out"})
.from(map,3,{y:60,opacity:0}, '-=2')
TL1.play();
})