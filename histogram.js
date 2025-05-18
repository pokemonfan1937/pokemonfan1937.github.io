import {gray} from "./gray.js"

const equalizebutton = document.getElementById("equalize");

equalizebutton.addEventListener("click", doEqualization);

function doEqualization(){
    var showcased = document.getElementById("showcased");
    let imgarray = nj.images.read(showcased);
    let original = imgarray.clone();
    gray(imgarray);
    histoequal(original, imgarray);
    nj.images.save(imgarray, showcased)

}

function histoequal(img, grayimg){
    let c
    let tempimg = grayimg.slice([null],[null],[1])
    let sumn = nj.zeros([nj.max(tempimg)+1])
    for (let i = 0; i < tempimg.shape[0]; i++){
        for (let j = 0; j < tempimg.shape[1]; j++){
            c = sumn.get(tempimg.get(i,j,0))
            sumn.set(tempimg.get(i,j,0), c+1)
        }
    }
    for (let i = 1; i < sumn.shape; i++){
        sumn.set(i, sumn.get(i) + sumn.get(i-1));
    }
    if (img.ndim == 3){
        let grayimgeq = grayimg.clone();
        for (let i = 0; i < grayimg.shape[0]; i++){
            for (let j = 0; j < grayimg.shape[1]; j++){
                c = grayimg.get(i,j,0)
                c = (sumn.get(c)/sumn.get(255)) * 255
                grayimgeq.set(i, j, 0, c);
                grayimgeq.set(i, j, 1, c);
                grayimgeq.set(i, j, 2, c);
            }
        }

        let r,g,b,graylevel,newgray
        for (let i = 0; i < img.shape[0]; i++){
            for (let j = 0; j < img.shape[1]; j++){
                r = (img.get(i,j,0))
                g = (img.get(i,j,1))
                b = (img.get(i,j,2))
                graylevel = (grayimg.get(i,j,0))
                if (graylevel == 0){
                    graylevel = 1
                }
                newgray = (grayimgeq.get(i,j,0))
                r = Math.round((r * newgray)/graylevel)
                g = Math.round((g * newgray)/graylevel)
                b = Math.round((b * newgray)/graylevel)
                if (r > 255){
                    r = 255
                }
                if (g > 255){
                    g = 255
                }
                if (b > 255){
                    b = 255
                }
                grayimg.set(i, j, 0, r);
                grayimg.set(i, j, 1, g);
                grayimg.set(i, j, 2, b);
            }
        }
        return grayimg
    }
    else{
        for (let i = 0; i < grayimg.shape[0]; i++){
            for (let j = 0; j < grayimg.shape[1]; j++){
                c = grayimg.get(i,j)
                c = (sumn.get(c)/sumn.get(255)) * 255
                grayimg.set(i, j, c);
            }
        }
        return grayimg
    }
}