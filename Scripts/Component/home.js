import comket from "../../comket/html.js";


export default function home(){
    let home = comket.div({
        class:"home",  id:"home",
        children:[
            Nav() , Heder()
        ]
    })
    return home
}

function Nav(){
    let nav = comket.div({
        class:"nav",
        children:[
            comket.img({src:"Media/logo.png"}),
            comket.div({
                class:"option",
                children:[
                    comket.a({href:"#home",text:"Home"}),
                    comket.a({href:"#sells",text:"Sells"}),
                    comket.a({href:"#delivery",text:"Delivery"}),
                    comket.a({href:"#our",text:"Our news"}),
                    comket.a({href:"#contact",text:"Contact"}),
                ]}),
            comket.img({src:"Media/cart.png"}),
        ]
    })
    return nav
}

function Heder(){
    let heder = comket.div({
        class:"heder",
        children:[
            comket.div({
                class:"left",
                children:[
                    comket.h3({text:"HAPPY NEW COLLECTION 2023"}),
                    comket.p({text:"Guys, we have hot-hot-hot new items! You were really waiting for some models, we read your thoughts and brought them."}),
                    comket.button({text:"TRY ON"}),
                ]}),

                comket.div({
                    class:"right",
                    children:[
                        comket.img({src:"Media/Group 1.png"}),
                        comket.img({src:"Media/shw.png"})
                    ]
                })
        ]
    })
    return heder
}
























