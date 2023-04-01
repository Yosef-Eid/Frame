import comket from "../../comket/html.js";


export default  function Our(){
    let our = comket.div({
        class:"our", id:"our",
        children:[
            comket.h1({text:"OUR NEWS"}),
            comket.div({
                class:"text",
                children:[
                    Left() ,
                    comket.img({src:"Media/our.png"})  
                ]
                    })
                ]
        
    })
    return our
}

function Left(){
    let left = comket.div({
        class:"left",
        children:[
            comket.h2({text:"ALL WHAT YOU MUST KNOW ABOUT OUTSOLE VANSE"}),
            comket.div({
                class:"number1",
                children:[
                    comket.h1({text:"1"}),
                    comket.p({text:"Vulcanized sole design, the sole is beloved by skaters for its excellent grip on the board"})
                ]}),
                comket.div({
                    class:"number2",
                    children:[
                        comket.h1({text:"2"}),
                        comket.p({text:"The soles are then pressed into a mold with the trademark waffle relief"})
                    ]}),
                    comket.div({
                        class:"number3",
                        children:[
                            comket.h1({text:"3"}),
                            comket.p({text:"The rubber is heated, then the rubber is pressed and then vulcanized."})
                        ]}),
        ]

    })
    return left
}