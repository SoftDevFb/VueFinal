/*
    Dev: Frankie Barrios
    Date: 11 / 29 / 18
    Purpose: Web Dev Final
*/

var myApp = new Vue({
    el: "#app",
    data: {
        total: 0,
        itemsOrdered: 0,
        items: [
            {
                name: "Air Jordan 3 “Katrina”",
                description:
                    "Featuring a white upper with elephant-print detailing and red hits for contrast, the shoe that was first introduced in 2003",
                qty: 10,
                numOrdered: 0,
                amount: 190,
                imgPath: "images/jordan3.jpg"
            },
            {
                name: "AIR JORDAN 11",
                description:
                    'The Air Jordan 11 "Easter" Low boasts a dark emerald patent leather detail and a pearlized outsole, which are offset by a white upper and rubber midsole ',
                qty: 10,
                numOrdered: 0,
                amount: 150,
                imgPath: "images/jordan11.jpg"
            },
            {
                name: "AIR JORDAN 13",
                description:
                    "The shoe featured an unconventional holographic eye and an outsole resembling a panther paw. The AJ XIII also featured innovations like a carbon fiber plate and Zoom Air.",
                qty: 10,
                numOrdered: 0,
                amount: 195,
                imgPath: "images/jordan13.jpg"
            }/*  ,
            {
                name: "Air Jordan 3 “Katrina”",
                description: "Featuring a white upper with elephant-print detailing and red hits for contrast, the shoe that was first introduced in 2003",
                qty: 10,
                numOrdered: 0,
                amount: 190,
                imgPath: "images/jordan3.jpg"
            }, {
                name: "AIR JORDAN 11",
                description: 'The Air Jordan 11 "Easter" Low boasts a dark emerald patent leather detail and a pearlized outsole, which are offset by a white upper and rubber midsole ',
                qty: 10,
                numOrdered: 0,
                amount: 150,
                imgPath: "images/jordan11.jpg"
            }, {
                name: "AIR JORDAN 13",
                description: "The shoe featured an unconventional holographic eye and an outsole resembling a panther paw. The AJ XIII also featured innovations like a carbon fiber plate and Zoom Air.",
                qty: 10,
                numOrdered: 0,
                amount: 195,
                imgPath: "images/jordan13.jpg"
            } */ 
        ]
    },
    methods: {
        addItem(item) {
            if (item.qty > 0) {
                item.qty--;
                item.numOrdered++;
                item.total += item.amount;
                /*See jsReference.txt for info on this. keyword */
                this.total += item.amount;
                this.itemsOrdered++;
            }
            // if(item.qty == 0){
            //     document.getElementById("orderBtn").innerHTML="Out Of Stock";
            //     document.getElementById("orderBtn").setAttribute("disabled", "disabled");//get applied to all buttons
            // }
        },
        removeItem(item) {
            if (item.numOrdered > 0) {
                item.qty++;
                item.numOrdered--;
                item.total -= item.amount;
                 /*See jsReference.txt for info on this. keyword */
                this.total -= item.amount;
                this.itemsOrdered--;
            } //add button functionality back if stock goes back up from zero
        }
    }
});
