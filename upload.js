const input = document.getElementById("upload");
const preview = document.getElementById("image");
const image = document.getElementById("showcased")
image.getContext("2d", { willReadFrequently: true })

input.style.opacity = 0;

input.addEventListener("change", updateImageDisplay);


function updateImageDisplay() {
    document.getElementById("noimage").hidden = true
    const curFiles = input.files;
    if (curFiles.length === 0){
        const para = document.createElement("p");
        para.textContent = "No image uploaded";
        preview.appendChild(para);
    } 
    else{
        file = curFiles[0];
        document.getElementById("list").hidden = false;
        if (validFileType(file)){
            document.getElementById("para").textContent = `File name ${file.name}.`;
            var img = new Image();
            img.onload = draw;
            img.src = URL.createObjectURL(file);
            
            var context = image.getContext('2d');
            context.drawImage(img, 0, 0);
            document.getElementById("shipIt").hidden = false;
            document.getElementById("options").hidden = false;
        } 
        else{
            para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
            list.appendChild(para);
        }
    }
}

function draw() {
    var image = document.getElementById('showcased');
    image.width = this.width;
    image.height = this.height;
    var ctx = image.getContext('2d');
    ctx.drawImage(this, 0,0);
}

const fileTypes = [
    "image/jpeg",
  ];
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

  
function returnFileSize(number) {
    if (number < 1e3) {
      return `${number} bytes`;
    } else if (number >= 1e3 && number < 1e6) {
      return `${(number / 1e3).toFixed(1)} KB`;
    } else {
      return `${(number / 1e6).toFixed(1)} MB`;
    }
}
  
