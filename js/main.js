$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $('#back_top').removeClass('hidden');
            $('#menu').removeClass('hidden');
            $('#home').removeClass('hidden');
        }
        else{
            $('#back_top').addClass('hidden');
            $('#menu').addClass('hidden')
            $('#home').addClass('hidden');
        } 
    });

});