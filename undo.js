import { reserveimg } from "./reserve.js";

const undobutton = document.getElementById("undo");

undobutton.addEventListener("click", doUndo);

function doUndo(){
    if (reserveimg.length == 0){
        alert("Can't Undo")
        return
    }
    let imgarray = reserveimg.pop();
    nj.images.save(imgarray, showcased)
    return

}