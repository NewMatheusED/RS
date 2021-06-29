$(function(){
    $('.mobile').click(function(){
        $('.mobile ul').slideToggle();
    })

    $('nav.desktop ul li a,nav.mobile ul li a').click(function(){
        $('.mobile ul').slideToggle();
    })

    //-----------------------------------------//

    var topo = $('.back-to-top-button')
    var place = $('.back-to-top-location')

    $(topo).click(function() {
        $('html,body').animate({
            scrollTop:$(place).offset().top
        })
        return false;
    })

    //-----------------------------------------//

    $(window).scroll(function(){
        let value = window.scrollY
        $('.chamada1').css('position', 'relative')
        $('.chamada1').css('right', value * 1.2 + 'px')
        $('.chamada1').css('top', value * 0.2 + 'px')
    })
})

    //-----------------------------------------//
    
    var formerY = 0;
    
    $("html").on("scroll", function(e){
        $(e.target).scrollRight(formerY);
    });
