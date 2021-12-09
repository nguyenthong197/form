
function error(){
    let emailText = document.getElementById('email')
    let passText = document.getElementById('pass')
    let userText = document.getElementById('user')
    let err = document.getElementsByClassName('none')
    console.log(emailText.value)
    function errEmail(){
    if(emailText.value.length == 0  || emailText.value.length < 8){
    err[0].style.display='block'
    } else{
    err[0].style.display='none'
    }
    }
    function errPass(){
    if(passText.value.length < 6  || passText.value.length > 20){
    err[1].style.display='block'
    } else{
    err[1].style.display='none'
    }
    }
    function errUser(){
    if(userText.value.length == 0){
    err[2].style.display='block'
    } else{
        err[2].style.display='none'
    }
    }
    errEmail()
    errPass()
    errUser()
    }