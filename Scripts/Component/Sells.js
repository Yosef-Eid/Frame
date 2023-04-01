import comket from "../../comket/html.js";


export default function Sells(){
    let sells = comket.div({
        class:"sells", id:"sells",
        children:[
            comket.h1({text:"OUR BESTSELLERS"}),
            comket.div({
                class:"shows",
                children:[
                    comket.div({
                        class:"shows2",
                        children:[
                            comket.div({
                                children:[
                                    comket.img({src:"Media/sh5.png"}),
                                    comket.h4({text:"400 BYN"})
                                ]}),
                                comket.div({
                                    children:[
                                        comket.img({src:"Media/sh4.png"}),
                                        comket.h4({text:"355 BYN"})
                                    ]}),
                        ]}),
                        comket.div({
                            class:"shows1",
                            children:[
                                comket.div({
                                    children:[
                                        comket.img({src:"Media/sh2.png"}),
                                        comket.h4({text:"380 BYN"})
                                    ]}),
                                    
                            ]}),
                            comket.div({
                                class:"shows2",
                                children:[
                                    comket.div({
                                        children:[
                                            comket.img({src:"Media/sh4.png"}),
                                            comket.h4({text:"355 BYN"})
                                        ]}),
                                        comket.div({
                                            children:[
                                                comket.img({src:"Media/sh5.png"}),
                                                comket.h4({text:"400 BYN"})
                                            ]}),
                                ]}),
                ]
            })
        ]
    })
    return sells
}