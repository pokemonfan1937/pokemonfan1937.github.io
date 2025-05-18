const input = document.getElementById("upload");
const preview = document.getElementById("image");

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
        const list = document.createElement("ol");
        list.id = "list";
        preview.appendChild(list);
        file = curFiles[0];
        const para = document.createElement("p");
        if (validFileType(file)){
            para.textContent = `File name ${file.name}.`;
            const image = document.createElement("canvas");
            image.getContext("2d", { willReadFrequently: true })
            image.id = "showcased";
            var img = new Image();
            img.onload = draw;
            img.src = URL.createObjectURL(file);
            
            var context = image.getContext('2d');
            context.drawImage(img, 0, 0);

            list.appendChild(image);
            list.appendChild(para);
            const download = document.getElementById("shipIt");
            const options = document.getElementById("options");
            download.hidden = false;
            options.hidden = false;
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
  
