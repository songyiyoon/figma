
$(document).ready(function(){
    $('.product_list').slick({
        arrows :false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay:true

    });
  });

    $('.shop_Categories').slick({
        arrows :false,
        dots: true, 
        autoplay:true
        
    });
    $('.single_Product').slick({
        arrows :false,
        dots: true, 
        autoplay:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
        
    });
           