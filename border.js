const borderbutton = document.getElementById("border");

borderbutton.addEventListener("click", doBorder);

function doBorder(){
    var showcased = document.getElementById("showcased");
    let imgarray = nj.images.read(showcased);
    addborder(imgarray);
    nj.images.save(imgarray, showcased)

}

function addborder(img){
    let color = prompt("Black or white border? Type 0 for Black or 1 for White");
    let c;
    if (color == "0"){
        c = 0;
    }
    else if (color == "1"){
        c = 255;
    }
    else{
        alert("not a valid input");
        return img
    }
    if (img.ndim == 3){
        for (let i = 0; i < img.shape[0]; i++){
            img.set(i,0,0,c)
            img.set(i,0,1,c)
            img.set(i,0,2,c)
            img.set(i,img.shape[1]-1, 0, c)
            img.set(i,img.shape[1]-1, 1, c)
            img.set(i,img.shape[1]-1, 2, c)
        }
        for (let i = 0; i < img.shape[1]; i++){
            img.set(0,i, 0, c)
            img.set(0,i, 1, c)
            img.set(0,i, 2, c)
            img.set(img.shape[0]-1, i, 0, c)
            img.set(img.shape[0]-1, i, 1, c)
            img.set(img.shape[0]-1, i, 2, c)
        }
    }
    else{
        for (let i = 0; i < img.shape[0]; i++){
            img.set(i,0,c)
            img.set(i,img.shape[1]-1, c)
        }
        for (let i = 0; i < img.shape[1]; i++){
            img.set(0,i,c)
            img.set(img.shape[0]-1, i, c)
        }
    }
}