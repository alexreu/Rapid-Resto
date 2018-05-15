$(document).ready(function(){
    
    $(window).on('scroll load', function(){
        if ($(window).scrollTop()>100){
            $('#back_top').removeClass('hidden');
            $('#menu').removeClass('hidden');
        }
        else{
            $('#back_top').addClass('hidden');
            $('#menu').addClass('hidden')
        } 
    });

});