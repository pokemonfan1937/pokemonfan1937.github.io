export function gray(img){
    if (img.ndim == 3){
        for (let i = 0; i < img.shape[0]; i++){
            for (let j = 0; j < img.shape[1]; j++){
                let c = (img.get(i, j, 0) + img.get(i, j, 1) + img.get(i, j, 2)) / 3
                img.set(i, j, 0, c);
                img.set(i, j, 1, c);
                img.set(i, j, 2, c);
            }
        }
    }
    return img
}