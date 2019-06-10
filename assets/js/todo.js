

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    $(this).parent().remove();
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){

        // Grab the text from the input
        var todoText = $(this).val();
        $(this).val("");
        // Put the text in a new LI
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

