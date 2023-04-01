import comket from "../../comket/html.js";


export default  function Delivery(){
    let delivery = comket.div({
        class:"delivery",id:"delivery",
        children:[
            comket.h1({text:"DELIVERY"}),
            comket.div({
                class:"text",
                children:[
                    Left() ,  Right()
                ]
                    })
                ]
        
    })
    return delivery
}

function Left(){
    let left = comket.div({
        class:"left",
        children:[
            comket.h2({text:"across Minsk:"}),
            comket.div({
                class:"number1",
                children:[
                    comket.h1({text:"1"}),
                    comket.p({text:"Delivery the next day of the order"})
                ]}),
                comket.div({
                    class:"number2",
                    children:[
                        comket.h1({text:"2"}),
                        comket.p({text:"Free delivery on purchases from 100 BYN"})
                    ]}),
                    comket.div({
                        class:"number3",
                        children:[
                            comket.h1({text:"3"}),
                            comket.p({text:"Pay in cash  or pay by credit card"})
                        ]}),
        ]

    })
    return left
}


function Right(){
    let right = comket.div({
        class:"right",
        children:[
            comket.h2({text:"across Belarus::"}),
            comket.div({
                class:"number1",
                children:[
                    comket.h1({text:"1"}),
                    comket.p({text:"Delivered to the door, within 2-3 business days"})
                ]}),
                comket.div({
                    class:"number2",
                    children:[
                        comket.h1({text:"2"}),
                        comket.p({text:"Free delivery on purchases from 100 BYN"})
                    ]}),
                    comket.div({
                        class:"number3",
                        children:[
                            comket.h1({text:"3"}),
                            comket.p({text:"Pay in cash  or pay by credit card"})
                        ]}),
        ]

    })
    return right
}