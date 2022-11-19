function validateRequired(value) {
    if (value === "") {
        return false
    }
    return true;
}

function showOtherInput(e) {
    if (e.target.id === 'from-other') {
        document.querySelector(".other-input-find").setAttribute("class", "other-input-find")
    } else {
        document.querySelector(".other-input-find").setAttribute("class", "other-input-find other-input")
    }
}

function checkLisense() {
    let check = document.querySelector("#lisense").checked;
    if (check) {
        return check;
    } else {
        alert('прими лицензионное соглашение');
        return check;
    }

}

(function () {
    document.querySelector("form").addEventListener('submit', submit);
    let a = document.querySelectorAll(".required");
    a.forEach(function (elem) {
        elem.addEventListener('blur', function (e) {
            input(e.target);
        })
    })
})();

function getInputValue(elem) {
    return elem.value;
}

function input(elem) {
    let value = getInputValue(elem);
    let valid = validateRequired(value);
    if (!valid) {
        alert(`заполни поле ${elem.name}`)
    }
    return valid;
}

function submit(event) {
    if (!(checkLisense() && validateRequiredFields())) {
        event.preventDefault();
    }
    else {
        alert (`Привет, ${getUserName()}!`)
    }
}

function getUserName() {
    return document.querySelector('#first-name').value;

}

function validateRequiredFields() {
    let check = true;
    let a = document.querySelectorAll(".required");
    a.forEach(function (elem) {
        check = check && input(elem);
    })
    return check;
}