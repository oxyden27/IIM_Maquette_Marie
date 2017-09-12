$( document ).ready(function() {
    $('.slider').slick({
        
      vertical: true,
      dots: true,
      arrows: false,
      infinite: true,
      autoplay:true,
      autoplaySpeed: 2000,
      slidesToShow: 1
    });
    
    /// deroulement smooth
    
            $('a[href^="#"]').click(function () {
            console.log("test reussi");
            var the_id = $(this).attr("href");
            $('html, body').animate({
                scrollTop: $(the_id).offset().top
            }, 'slow');
            return false;
        });
});