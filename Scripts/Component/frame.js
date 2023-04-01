import comket from "../../comket/html.js";

import home from "../../Scripts/Component/home.js";
import Delivery from "../../Scripts/Component/delivery.js";
import Sells from "../../Scripts/Component/sells.js";
import Our from "../../Scripts/Component/Our.js";
import Contact from "../../Scripts/Component/Contact.js";




export default function Frame(){
    let frame = comket.div({
        class:"frame",
        children:[
            home() , Sells() , Delivery() , Our() , Contact()
        ]
    })
    return frame
}