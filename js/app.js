$(function(){
    $('.mobile').click(function(){
        $('.mobile ul').slideToggle();
    })

    //-----------------------------------------//

    var topo = $('.back-to-top-button')
    var place = $('.back-to-top-location')

    $(topo).click(function() {
        $('html,body').animate({scrollTop:$(place).offset().top})
        return false;
    })
})