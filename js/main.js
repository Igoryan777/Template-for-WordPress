$(function (){
    //Fixed navigation
    let navPos = $('#nav').position().top;
    let navHeight = $('#nav').outerHeight(true);


    $('<div class="clone-nav"><div>').insertBefore('nav').css('height', navHeight).hide();

    $(window).scroll(() => {
        if ($(window).scrollTop() >= navPos && $(window).width() >= 768) {
            $('#nav').addClass('fixed shadow');
            $('.clone-nav').show();
        }  else {
            $('#nav').removeClass('fixed shadow');
            $('.clone-nav').hide();
        }
    });

    //Burger menu
    $('.nav-menu').on('click',function (){
       $('#nav').css({
           'transform': 'translateX(0)'
       });
       $('.overlay').toggleClass('overlay-act');
    });
    $('.close-btn').on('click',function (){
        $('#nav').css({
            'transform': 'translateX(-3000px)'
        });
        $('.overlay').toggleClass('overlay-act');
    });
    $(window).resize(function (){
        if ($(window).width() >= 768 ) {
            $('#nav').css('transform','translateX(0)');
            $('.clone-nav').hide();
        } else {
            $('#nav').css('transform','translateX(-3000px)');
        }
    });
});