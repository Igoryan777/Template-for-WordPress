$(function (){
    //Fixed navigation
    let navPos = $('#nav').position().top;
    let navHeight = $('#nav').outerHeight(true);


    $('<div class="clone-nav"><div>').insertBefore('nav').css('height', navHeight).hide();

    $(window).scroll(() => {
        if ($(window).scrollTop() >= navPos) {
            $('#nav').addClass('fixed shadow');
            $('.clone-nav').show();
        }  else {
            $('#nav').removeClass('fixed shadow');
            $('.clone-nav').hide();
        }
    });
});