$(document).ready(function(){
    if($(".button_js").click(function(event){
        event.preventDefault();
        var pattern = /^[0-9A-Za-z]+@[a-z]{4,}\.com$/;
        var value = $("#email").val();
        if(pattern.test(value)){
            alert("chúng tôi sẽ gửi mail cho bạn trong 2-3 phút nữa");
            // Chuyển hướng sang trang cục bộ trên máy tính
            window.location.href = "../html/signIn.html";
        }
        else{
            alert("bạn phải nhấn như mẫu");
        }
    }));
});