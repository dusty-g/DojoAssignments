
$(document).ready(function() {
    var rows = 1;
// function clearForm(){
//     $("input[type='text']").attr("value", "");
}
$("button").click(function(){
    var firstname =$("input[name='firstname']").val();
    $("#row"+rows+" .table_first_name").text(firstname);
    var lastname =$("input[name='lastname']").val();
    $("#row"+rows+" .table_last_name").text(lastname);
    var email =$("input[name='email']").val();
    $("#row"+rows+" .table_email").text(email);
    var contact =$("input[name='contact']").val();
    $("#row"+rows+" .table_contact").text(contact);
    rows++;
    
    $("table").append("<tr id='row"+rows+"'><td class='table_first_name'></td><td class='table_last_name'></td><td class='table_email'></td><td class='table_contact'></td></tr>");

   

});




});