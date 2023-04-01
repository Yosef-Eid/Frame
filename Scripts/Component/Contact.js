import comket from "../../comket/html.js";


export default function Contact(){
    let contact = comket.div({
        class:"contact", id:"contact",
        children:[
            comket.h1({text:"Contact"}),
            comket.div({
                class:"text",
                children:[
                    Left(),
                    comket.img({class:"hom", src:"Media/gg.png"})
                ]
            })

        ]
    })
    return contact
}


function Left(){
    let left = comket.div({
        class:"left",
        children:[
            comket.h2({text:"VANS STORE ADRESS:"}),
            comket.p({text:"Minsk Pobediteley Ave. 9" , style:{marginTop:"35px"}}),
            comket.p({text:"Gallery Minsk shopping mall 3rd floor"}),
            comket.h2({text:"TIME OF WORK:" , style:{marginTop:"71px"}}),
            comket.p({text:"Every day 10:00-22:00" , style:{marginTop:"35px"}}),
            comket.div({
                children:[
                    comket.img({src:"Media/telegram.png"}),
                    comket.img({src:"Media/instagram.png"}),
                    comket.img({src:"Media/facebook2.png"}),
                ]
            })
        ]
    })
    return left 
}



















