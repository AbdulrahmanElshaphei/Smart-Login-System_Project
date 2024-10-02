document.getElementById('userName').innerHTML = localStorage.getItem('userName');

document.getElementById('Logout').addEventListener("click" , function(){
    localStorage.removeItem('userName')
})