function validateRequired (value) {
    if (value === "") {
        return false
    }
    return true;
}

function showOtherInput (e) {
   if (e.target.id === 'from-other') {
       document.querySelector(".other-input-find").setAttribute("class", "other-input-find")
   }
    else {
       document.querySelector(".other-input-find").setAttribute("class", "other-input-find other-input")
   }
}