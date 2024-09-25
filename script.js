$(document).ready(function(){
 $("#form").addClass('animate__animated animate__bounce');
 $('#submit').click(function(){
    const alert1 = "<div class=\'alert alert-danger\' id=\"alert1\" role=\"alert\">Type name between 6-18 characters</div>";
    const alert2 = "<div class=\'alert alert-danger\' id=\"alert2\" role=\"alert\">Type in a valid email</div>";
    const check = '<i class="fa-solid fa-check"></i>';
 if($("#name").val().length < 6 || $('#name').val().length > 17 ){
    if($('#name-container > #alert1').length === 0){
 $('#name-container').append(alert1);
    }
 $('#name-container > .fa-check').remove();
    $("#name-container").addClass('animate__animated animate__shakeX');
 }else{
    $("#name-container > #alert1").remove();
    if($('#name-container > .fa-check').length === 0){
       $('#name-container').append(check);
       $('#name-container > .fa-check').addClass('animate__animated animate__fadeIn ');
 }
}
if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val())){
   $('#email-container > #alert2').remove();
   if($('#email-container > .fa-check').length === 0){
    $('#email-container').append(check);
    $('#email-container > .fa-check').addClass('animate__animated animate__fadeIn ')
   }
}else{
   if($('#email-container > #alert2').length === 0){
      $('#email-container').append(alert2)
   }
   $("#email-container > .fa-check").remove();
   $("#email-container").addClass('animate__animated animate__shakeX');
         }
      });
   });

