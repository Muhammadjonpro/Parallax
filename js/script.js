let controller = new ScrollMagic.controller();
let timeline = new timeLine();

let scene = new ScrollMagic.scene({
    triggerElement: "main",
    duration:"100%",
    triggerHook:0
})

.setTween(timeline)
.setPin("main")
.addTo(controller)



timeline
    .to(".helloText",10,{y:-300})
    .fromto("tashkentImg",{y: -50},{y: 0,duration: 3}, "-=3")
    .to(".info",3,{top: '0%'}, '-=3')






init_pointer({
    pointerColor:'#fff',
    ringSize:20,
    ringClickSize:15
})