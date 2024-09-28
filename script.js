$(document).ready(function(){
 $('#submit').click(function(){
   const txt ='<h1 class=".txt mx-auto">Congratulations on creating an account</h1>';
    const alert1 = "<div class=\'alert alert-danger\' id=\"alert1\" role=\"alert\">Type name between 6-18 characters</div>";
    const alert2 = "<div class=\'alert alert-danger\' id=\"alert2\" role=\"alert\">Type in a valid email</div>";
    const alert3 = "<div class=\'alert alert-danger\' id=\"alert3\" role=\"alert\">PassWord must have a minimum of 12-14 characters</div>";
    const alert4 = "<div class=\'alert alert-danger\' id=\"alert4\" role=\"alert\">At Least 1 Uppercase letter</div>";
    const alert5 = "<div class=\'alert alert-danger\' id=\"alert5\" role=\"alert\">At Least 1 Lowercase letter</div>";
    const alert6 = "<div class=\'alert alert-danger\' id=\"alert6\" role=\"alert\">At Least 1 number</div>";
    const alert7 = "<div class=\'alert alert-danger\' id=\"alert7\" role=\"alert\">At Least 1 symbol</div>";
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
        const lengthValid = $("#password").val().length >= 13;
        const uppercasevalid = /[A-Z]/.test($("#password").val());
        const lowercaseValid = /[a-z]/.test($("#password").val());
        const SymbolValid = /[!@#$%^&*]/.test($("#password").val());
        const numberValid = /\d/.test($("#password").val());
        if(lengthValid ){
         $('#characters > #alert3').remove();
         if($('#characters > .fa-check').length === 0){
          $('#characters').append(check);
          $('#characters > .fa-check').addClass('animate__animated animate__fadeIn ')
         }
      }else{
         if($('#characters > #alert3').length === 0){
            $('#characters').append(alert3)
         }
         $("#characters > .fa-check").remove();
         $("#characters").addClass('animate__animated animate__shakeX');
        }
        if(uppercasevalid){
         $('#uppercase > #alert4').remove();
         if($('#uppercase > .fa-check').length === 0){
          $('#uppercase').append(check);
          $('#uppercase > .fa-check').addClass('animate__animated animate__fadeIn ')
         }
        }else{
         if($('#uppercase > #alert4').length === 0){
            $('#uppercase').append(alert4)
         }
         $("#uppercase > .fa-check").remove();
         $("#uppercase").addClass('animate__animated animate__shakeX');
        }
        if(lowercaseValid){
         $('#lowercase > #alert5').remove();
         if($('#lowercase > .fa-check').length === 0){
          $('#lowercase').append(check);
          $('#lowercasecase > .fa-check').addClass('animate__animated animate__fadeIn ')
         }
        }else{
         if($('#lowercase > #alert5').length === 0){
            $('#lowercase').append(alert5)
         }
         $("#lowercase > .fa-check").remove();
         $("#lowercase").addClass('animate__animated animate__shakeX');
        }
        if(SymbolValid){
         $('#symbol > #alert6').remove();
         if($('#symbol > .fa-check').length === 0){
          $('#symbol').append(check);
          $('#symbol > .fa-check').addClass('animate__animated animate__fadeIn ')
         }
        }else{
         if($('#symbol > #alert6').length === 0){
            $('#symbol').append(alert6)
         }
         $("#symbol > .fa-check").remove();
         $("#symbol").addClass('animate__animated animate__shakeX');
        }
        if(numberValid){
         $('#number > #alert7').remove();
         if($('#number > .fa-check').length === 0){
          $('#number').append(check);
          $('#number > .fa-check').addClass('animate__animated animate__fadeIn ')
         }
        }else{
         if($('#number > #alert7').length === 0){
            $('#number').append(alert7)
         }
         $("#number > .fa-check").remove();
         $("#number").addClass('animate__animated animate__shakeX');
        }
        if($("#name-container .fa-check").length > 0 &&
        $("#email-container .fa-check").length > 0 &&
        $("#characters .fa-check").length > 0 &&
        $("#uppercase .fa-check").length > 0 &&
        $("#lowercase .fa-check").length > 0 &&
        $("#symbol .fa-check").length > 0 &&
        $("#number .fa-check").length > 0) {
        
        $("#form").addClass('animate__animated animate__flip');
               $("#form").html(txt);
               
        }
      });
   });

