$("#submit").click(function(){
    if (checkName() === true && checkPhone() === true && checkAddress() === true){
        alert("Thanks for your order, please prepare money when order arrives");
    }
})
function checkName(){
    var name = $("#name").val();
    var patternName = /^[A-Z][a-z]+(\s[A-Z][a-z]*)*$/;
    if (!patternName.test(name)){
        alert("Invalid name!");
        $("#name").focus();
        return false;
    } return true;
}
function checkPhone(){
    var phone = $("#phone").val();
    var phonePattern = /^[0-9]{10}$/;
    if(!phonePattern.test(phone)){
    alert("Invalid phone!");
    $("#sdt").focus();
    return false;
} return true;
}
function checkAddress(){
    var address = $("#address").val();
    var patternAddress = /^\w+$/;
    if(!patternAddress.test(address)){
        return false;
    } return true;
}

$("#reset").click(function(){
    location.reload();
})