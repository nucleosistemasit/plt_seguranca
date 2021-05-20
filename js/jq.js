$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".tag-epi").not(targetBox).hide();
        $(".epi-hash").not(targetBox).hide();
        $(targetBox).show();
    });
});