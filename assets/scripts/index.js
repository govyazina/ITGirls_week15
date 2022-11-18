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

function checkLisense () {
    return document.querySelector("#lisense").checked;

}

(function () {
    document.querySelector("form").addEventListener('submit', submit);
    let a = document.querySelectorAll(".required");
    a.forEach(function (elem) {
        elem.addEventListener('blur', input)
    })
})();

function getInputValue(elem) {
    return elem.value;
}

function input(event) {
    let value = getInputValue(event.target);
    let valid = validateRequired(value);
    if (!valid) {
        alert(`заполни поле ${event.target.name}`)
    }
}

function submit(event) {
    if (!checkLisense()) {
        alert('прими лицензионное соглашение')
        return false;
    }

}