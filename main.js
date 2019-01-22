$(function(){
    $('.toggles button').click(function(){
        let get_id = this.id;
        let get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function(){
        $('.post').show(500);
    });
});

//owl-carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 7,
    });
  });

if($(window).width() < 420){
    $(".owl-carousel").owlCarousel({
        items: 3,
    });
}