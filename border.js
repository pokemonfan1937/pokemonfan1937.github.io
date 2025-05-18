const borderbutton = document.getElementById("border");

borderbutton.addEventListener("click", doBorder);

function doBorder(){
    var showcased = document.getElementById("showcased");
    let imgarray = nj.images.read(showcased);
    addborder(imgarray);
    nj.images.save(imgarray, showcased)

}

function addborder(img){
    let c = 0;
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