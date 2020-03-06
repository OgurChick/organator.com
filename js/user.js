var userName= document.getElementById('inUserName')
var userColor = document.getElementById('inUserColor')

var userNameBtn = document.getElementById('acceptName')
var userButton =document.getElementById('accept')
var buttonAdd =document.getElementById('btn-add')
var buttonStart =document.querySelector('.button')


var mass = [userButton, buttonAdd, buttonStart, userNameBtn]


window.onload = function () {
    if(localStorage.getItem('btnColor') !==null){

        for (l=0;l<mass.length;l++) {
            mass[l].style.backgroundColor = localStorage.getItem('btnColor')
        }

    }
if (localStorage.getItem('userName') !==null){
    $('#nameUser').text(localStorage.getItem('userName'))
}
}

function acceptUser(){

    if(userName.value.length<=11 && userName.value.length!==0 ){
        userName.style.borderColor = "black"

        document.getElementById('alertsName').style.display= "none"
        $('#nameUser').text(userName.value)
        localStorage.setItem('userName', userName.value)
    }else {
        document.getElementById('alertsName').style.display= "flex"
    }
}

function acceptColor() {
    for (j=0; j<mass.length; j++){
    mass[j].style.backgroundColor = userColor.value
        localStorage.setItem('btnColor', userColor.value)
}
}

function changeColor(n){
for (i=0; i<mass.length; i++){

    if (n==1) {
        mass[i].style.backgroundColor = "#46639C"
        localStorage.setItem('btnColor', '#46639C')
    }
    if (n==2) {
        mass[i].style.backgroundColor = "#090325"
        localStorage.setItem('btnColor', '#090325')
    }
    if (n==3) {
        mass[i].style.backgroundColor = "#1b1b1b"
        localStorage.setItem('btnColor', '#1b1b1b')
    }
    if (n==4) {
        mass[i].style.backgroundColor = "#c062be"
        localStorage.setItem('btnColor', '#c062be')
    }
    if (n==5) {
        mass[i].style.backgroundColor = "#006702"
        localStorage.setItem('btnColor', '#006702')
    }
    }}


