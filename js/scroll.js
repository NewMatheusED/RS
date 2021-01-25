$(function() {
    $('nav.desktop ul li a,nav.mobile ul li a').click(function(){
        var href = $(this).attr('href'); 

        $('html,body').animate({scrollTop:$(href).offset().top});

        return false;
    })
})