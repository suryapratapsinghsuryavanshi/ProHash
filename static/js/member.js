const block = document.getElementsByClassName('block');
function exp(expData) {
    if (expData.style.height === "") {
        for (key of block) {
            key.style.height = '';
        }
        expData.style.height = "300px";
    }
    else {
        expData.style.height = "";
    }
}
