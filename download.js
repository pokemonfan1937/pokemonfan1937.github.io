const button = document.getElementById("shipIt");
const link = document.getElementById("link");

let downloadURL;

button.addEventListener("click", shipIt);

function shipIt() {
    const showcased = document.getElementById("showcased");
    link.download = input.files[0].name;
    link.href = showcased.toDataURL();
    link.click()
}