$(document).ready(function(){
   $(".plus-js").click(function(e){
        e.preventDefault();
        var soLuong = parseInt( $(".soLuong-js").val());
        if(soLuong>=1){
           var newSoLuong =  soLuong+1;
            $(".soLuong-js").val(newSoLuong);
            console.log( $(".soLuong-js").val());
        }
   })
   $(".minus-js").click(function(){
    var soLuong = parseInt( $(".soLuong-js").val());
    if(soLuong>1){
       var newSoLuong =  soLuong-1;
        $(".soLuong-js").val(newSoLuong);
        console.log( $(".soLuong-js").val());
    }
})

})