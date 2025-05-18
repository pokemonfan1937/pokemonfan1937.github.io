import {reserveimg} from "./reserve.js"

const clearbutton = document.getElementById("clear");
const form = document.getElementById("form");

clearbutton.addEventListener("click", doClear);

function doClear(){
    form.reset();
    document.getElementById("list").hidden = true;
    document.getElementById("shipIt").hidden = true;
    document.getElementById("options").hidden = true;
    document.getElementById("noimage").hidden = false;
    while(reserveimg.length != 0){
        reserveimg.pop();
    }
}