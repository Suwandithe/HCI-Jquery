$(document).ready(function(){
    $(".accordion-body .question").click(function(){
        $(this).parent().toggleClass("active");
    });
});