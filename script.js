$(document).ready(function(){
 $("#form").addClass('animate__animated animate__bounce');



 $('#submit').click(function(){
    const alert = "<div class=\'alert alert-danger\' role=\"alert\">Type name between 6-18 characters</div>";
    const check = '<i class="fa-solid fa-check"></i>';
 if($("#name").val().length < 6 || $('#name').val().length > 17 ){
    if($('.alert').length === 0){
 $('#form').append(alert);
    }
 $('.fa-check').remove();
    
 }else{
    $(".alert").remove();
    if($('.fa-check').length === 0){
    $('#name-container').append(check);
    $('.fa-check').addClass('animate__animated animate__fadeIn ')
 }
}
});
});