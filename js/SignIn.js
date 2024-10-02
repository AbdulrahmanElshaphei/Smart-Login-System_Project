var userEmail = document.querySelector("#email")
var userpassword = document.querySelector("#password")
var loginBtn = document.querySelector("#login")
var usersInfo = []
usersInfo = JSON.parse(localStorage.getItem('usersInfo'))

loginBtn.addEventListener("click" , function(){
    if(userEmail.value == '' || userpassword.value == ''){
        document.querySelector("#Message").innerHTML = `<p class = "text-center text-danger fs-5">All inputs is required</p>`
    }else{
        checkUser()
    }
})

function checkUser(){
    for(var i = 0 ; i < usersInfo.length ; i++){
        if(userEmail.value == usersInfo[i].email && userpassword.value == usersInfo[i].pass){
            var y = usersInfo[i].name;
            localStorage.setItem('userName' , y);
             document.querySelector("#Message").innerHTML = `<p class = "text-center successcolor fs-5">Success</p>`
            location.href = '../Welcome.html';
            break;
        }else{
            document.querySelector("#Message").innerHTML = `<p class = "text-center text-danger fs-5">Email or Password is not valid, Try again</p>`
        }
    }
}