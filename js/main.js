$(document).ready(function(){
    
    $(window).on('scroll load', function(){
        if ($(window).scrollTop()>50){
            $('#back_top').removeClass('hidden');
        }
        else{
            $('#back_top').addClass('hidden');
        } 
    });

});