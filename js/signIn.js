function check(){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    
    var checkEmail = /^\w+(@gmail.com)$/i;
    var checkPass = /^\w{8,}$/i;

    if(!checkEmail.test(email)){
      alert("INVALID EMAIL!");
      return;
    }
    else if(!checkPass.test(password)){
      alert("PASSWORD MUST HAVE AT LEAST 8 WORD!");
      return;
    } 
    else if (checkEmail.test(email) && checkPass.test(password)){
      document.getElementById("home").click();
    }
    
  }