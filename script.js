$(document).ready(function(){
    $('#search, .fa-search').mouseenter(function(){
  $('.logo').hide();
    });
    $('#search, .fa-search').mouseleave(function(){
    $('.logo').show();
    });
    
    // bar toggling
    $('.fa-bars').click(function(){
  $('.navbar').toggle();
  $(this).toggleClass('fa-times');
    });


// header scrolling and background changing..

$(window).on('scroll load',function(){
  if($(window).scrollTop()>20){
    $('#header').css({
      'background':'crimson',
      'box-shadow':'0 0.3rem 0.3rem #fff'
    });
  }
  else{
    $('#header').css({
      'background':'#333',
      'box-shadow':'none'
    });
  }
});






    // hiding after clicking.

    $('.navbar,.navbar a').click(function(){
  $('.navbar').hide();
     $('.fa-bars').removeClass('fa-times');
    });

    $('.home-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
     items:1,
    autoplay:true
  });

  $('.product-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
   items:3,
  autoplay:true,
  center:true,
  responsive:{
    0:{
      items:1,
      nav:true
  },
  650:{
    items:2
  },
  770:{
   items:2
  },
  1260:{
    items:3
  }
  }
});


$('.feedback-slider').owlCarousel({
  loop:true,
  nav:true,
  items:2,
 autoplay:true,
 responsive:{
   0:{
     items:1,
     nav:true
   },
   700:{
     items:2
   },
   900:{
     items:2
   }
 }
});

$('.cat-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
 items:3,
 dots:false,
autoplay:true,
responsive:{
  0:{
    items:1,
    nav:true
},
400:{
  items:2
},
650:{
  items:3
},
770:{
 items:4
},
1260:{
  items:5
}
}
});



});
