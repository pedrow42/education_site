$(document).ready(function(){

    // Add new element
    $(".add-time").click(function(){
    
    // last <div> with element class id
    var lastid = $(".schedule-item:last").attr("id");
    var split_id = lastid.split("_");
    var nextindex = Number(split_id[1]) + 1;

    
    // Adding new div container after last occurance of element class
    $(".schedule-item:last").after("<div class='schedule-item' id='div_"+ nextindex +"'></div>");

    // Adding element to <div>
    $("#div_" + nextindex).append("<input type='text' id='div_"+ nextindex +"'</input><button id='remove_" + nextindex + "' class='remove'>X</button>");


});

// Remove element
$('#schedule-items').on('click','.remove',function(){

 var id = this.id;
 var split_id = id.split("_");
 var deleteindex = split_id[1];

 // Remove <div> with id
 $("#div_" + deleteindex).remove();

}); 
});