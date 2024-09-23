function MyAccount(){
    var User = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var Password = document.getElementById('Pass').value;
    var ConfirmPass = document.getElementById('Confirm Pass').value;
    var Result = document.getElementById('result');
    
    Result.setAttribute("class","edit-result");

    if(User=="" && Email=="" && Password=="" && ConfirmPass==""){
        Result.innerHTML = "Enter your Data in Form";
        return false;
    }else if(User.length<5 || User.length>15){
        Result.innerHTML = "Enter 5 to 15 characters";
        return false;
    }else if (User.includes(" ")){
        Result.innerHTML= "No space allowed";
        return false;
    }else if(Email.indexOf('@') == -1 || Email.indexOf(".com") == -1){
        Result.innerHTML = "Enter Valid Email";
        return false;
    }else if (Password.length == 0){
        Result.innerHTML = "Enter your Password";
        return false;
    }else if (Password.length<8){
        Result.innerHTML = "Week Password";
        return false;
    }else if (ConfirmPass != Password){
        Result.innerHTML = "Match Password"
        return false;
    }
}