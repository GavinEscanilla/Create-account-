$(document).ready(function(){
 $("#form").addClass('animate__animated animate__bounce');
 $('#submit').click(function(){
    const alert1 = "<div class=\'alert alert-danger\' id=\"alert1\" role=\"alert\">Type name between 6-18 characters</div>";
    const alert2 = "<div class=\'alert alert-danger\' id=\"alert2\" role=\"alert\">Type in a valid email</div>";
    const check = '<i class="fa-solid fa-check"></i>';
 if($("#name").val().length < 6 || $('#name').val().length > 17 ){
    if($('#alert1','#name-container').length === 0){
 $('#name-container').append(alert1);
    }
 $('.fa-check', '#name-container').remove();
    $("#name-container").addClass('animate__animated animate__shakeX');
 }else{
    $("#alert1",'#name-container').remove();
    if($('.fa-check').length === 0){
    $('#name-container').append(check);
    $('.fa-check').addClass('animate__animated animate__fadeIn ');
 }
}
if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val())){
   $("#alert2",'#email-container').remove();
   if($('.fa-check','#email-container').length === 0){
   $('#email-container').append(check);
   $('.fa-check').addClass('animate__animated animate__fadeIn ')
}else{
   if($("#alert2",'#email-container').length === 0){
      $('#email-container').append(alert2)
   }
   $(".fa-check","#email-container").remove();
   $("#email-container").addClass('animate__animated animate__fadeIn ');
}
}
});
});

