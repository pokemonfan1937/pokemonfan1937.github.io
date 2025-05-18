export var reserveimg = []

export function reserve(img){
    let temp = img.clone();
    reserveimg.push(temp)
    return;
}