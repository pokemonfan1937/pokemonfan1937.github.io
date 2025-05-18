import {gray} from "./gray.js"

const otsubutton = document.getElementById("otsu");

otsubutton.addEventListener("click", doOtsu);

function doOtsu(){
    var showcased = document.getElementById("showcased");
    let imgarray = nj.images.read(showcased);
    gray(imgarray);
    otsu(imgarray);
    nj.images.save(imgarray, showcased)

}

function otsu(img){
    let thresh = 0;
    let tempimg = img.slice([null],[null],[1])
    let temp = nj.zeros(img.shape)
    let sb2 = 0;
    let c;
    let sumn = nj.zeros([nj.max(tempimg)+1])
    for (let i = 0; i < tempimg.shape[0]; i++){
        for (let j = 0; j < tempimg.shape[1]; j++){
            c = sumn.get(tempimg.get(i,j,0))
            sumn.set(tempimg.get(i,j,0), c+1)
        }
    }
    for (let i = nj.min(tempimg) + 1; i < nj.max(tempimg); i++){
        let o0 = 0;
        let o1 = 0;
        let m0 = 0;
        let m1 = 0;
        for (let j = 0; j < i; j++){
            o0 = o0 + sumn.get(j)
            m0 = m0 + j * sumn.get(j)
        }
        for (let j = i+1; j < 256; j++){
            o1 = o1 + sumn.get(j)
            m1 = m1 + j * sumn.get(j)
        }
        o0 = o0 / nj.sum(sumn)
        o1 = o1 / nj.sum(sumn)
        m0 = m0 / o0
        m1 = m1 / o1
        temp = o0*o1*(m0-m1)*(m0-m1)
        if (temp > sb2){
            sb2 = temp
            thresh = i
        }
    }
    console.log(thresh)
    for (let i = 0; i < img.shape[0]; i++){
        for (let j = 0; j < img.shape[1]; j++){
            if (img.get(i,j,0) > thresh){
                c = 255;
            }
            else{
                c = 0;
            }
            img.set(i, j, 0, c);
            img.set(i, j, 1, c);
            img.set(i, j, 2, c);
        }
    }
    return img
}