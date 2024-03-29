function check(){
    // GET INFORMATIONS FROM INPUT
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pwd").value;
    var confirmPass = document.getElementById("confirm-pwd").value;

    //DECLARE PATTERN
    var checkName = /^[A-Z][a-z]*$/; 
    var checkPhone = /^[0-9]{10,10}$/;
    var checkEmail = /^[a-zA-Z0-9]+(@gmail.com)$/;
    var checkPass = /^\w{8,}$/;

    
    


    if (!checkName.test(firstName) ){ 
      alert("INVALID FIRST NAME!");
      return false;
    }
    else if (!checkName.test(lastName) ){ 
      return false;
    }
    else if(!checkPhone.test(phone)){ 
      alert("INVALID PHONE NUMBER!"); 
      return false;
    }
    else if(!checkEmail.test(email)){
      alert("INVALID EMAIL!");
      return false;
    }
    else if (!checkPass.test(pass)){
      alert("PASSWORD MUST HAVE AT LEAST 8 WORD!");
      return false;
    }
    else if (!checkPass.test(confirmPass) | pass != confirmPass){
      alert("WRONG CONFIRM PASSWORD!");
      return false;
    }
    else{
      alert("SIGN UP SUCCESSED");
      
    }
    
  }