$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menubar/navbar scipt
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHouverPause: true,
        responsive: {
            0:{
                intems: 1,
                nav: false
            },
            600:{
                intems: 2,
                nav: false
            },
            1000:{
                intems: 3,
                nav: false
            }
        }
    })
});