var userName = document.querySelector("#Name")
var userEmail = document.querySelector("#email")
var userpassword = document.querySelector("#password")
var SignUpBtn = document.querySelector("#SignUp")
var usersInfo = []
if (localStorage.getItem("usersInfo") != null) {
    usersInfo = JSON.parse(localStorage.getItem("usersInfo"))
}

SignUpBtn.addEventListener("click", function () {
    if (userName.value == '' || userEmail.value == '' || userpassword.value == '' || checkEmailFound() == true || validationName() == false || validationEmail() == false || validationPassword() == false) {
        document.querySelector("#Message").innerHTML = `<p class = "text-center text-danger fs-5">Name or Email or Password is not valid, Please follow the rules below : <br> Name must contain at least 3 characters <br> Email must be a valid one (Don’t repeat Email) <br> Password must Start With (Capital Character)</p>`
    } else {
        var userInfo = {
            name: userName.value,
            email: userEmail.value,
            pass: userpassword.value
        }
        usersInfo.push(userInfo);
        document.querySelector("#Message").innerHTML = `<p class = "text-center successcolor fs-5">Success</p>`
        updateLocalStorage()
        clearForm()
    }
})

function updateLocalStorage() {
    localStorage.setItem("usersInfo", JSON.stringify(usersInfo))
}

function clearForm() {
    userName.value = null;
    userEmail.value = null;
    userpassword.value = null;
}

function validationName() {
    var regex = /^\w{3,}$/;
    if (regex.test(userName.value)) {
        userName.classList.add('is-valid')
        userName.classList.remove('is-invalid')
        return true;
    }
    else {
        userName.classList.add('is-invalid')
        userName.classList.remove('is-valid')
        return false;
    }
}

function validationEmail() {
    var regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (regex.test(userEmail.value)) {
        userEmail.classList.add('is-valid')
        userEmail.classList.remove('is-invalid')
        return true;
    }
    else {
        userEmail.classList.add('is-invalid')
        userEmail.classList.remove('is-valid')
        return false;
    }
}

function validationPassword() {
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (regex.test(userpassword.value)) {
        userpassword.classList.add('is-valid')
        userpassword.classList.remove('is-invalid')
        return true;
    }
    else {
        userpassword.classList.add('is-invalid')
        userpassword.classList.remove('is-valid')
        return false;
    }
}

function checkEmailFound() {
    for (var i = 0; i < usersInfo.length; i++) {
        if (userEmail.value == usersInfo[i].email) {
            return true
        }
    }
}