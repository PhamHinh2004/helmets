$("#submit").click(function(){
    var email = $("#enterEmail").val();
    var emailPattern = /^\w+(@gmail.com)$/;
    if (!emailPattern.test(email)){
        alert("Invalid email");
        return;
    } else{
        alert("We have sent you a confirmation email");
        location.reload();
    }

})