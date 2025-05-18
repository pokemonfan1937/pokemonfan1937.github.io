import {gray} from "./gray.js"

const graybutton = document.getElementById("grayscale");


graybutton.addEventListener("click", doGray);

function doGray(){
    var showcased = document.getElementById("showcased");
    let imgarray = nj.images.read(showcased);
    gray(imgarray);
    nj.images.save(imgarray, showcased)

}
