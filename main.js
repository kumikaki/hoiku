let beforePos = 0;

function ScrollAnime() {
    let elemTop = $('#hero-img').offset().top;
    let scroll = $(window).scrollTop();
    if(scroll == beforePos) {
    }else if(elemTop > scroll || 0 > scroll - beforePos){

    $('#header-wrap').removeClass('UpMove'); 
    $('#header-wrap').addClass('DownMove');
    }else {
 
        $('#header-wrap').removeClass('DownMove');
    $('#header-wrap').addClass('UpMove');
    }
    
    beforePos = scroll;
}
$(window).scroll(function () {
  ScrollAnime();
});


function PageTopAnime() {
    let scroll = $(window).scrollTop();
    if (scroll >= 5500){
        $('#topup-btn').removeClass('UpMove');
        $('#topup-btn').addClass('DownMove');
    }else{
    if($('#topup-btn').hasClass('DownMove')){
      $('#topup-btn').removeClass('DownMove');
      $('#topup-btn').addClass('UpMove');
    }
  }
}
$(window).scroll(function () {
  PageTopAnime();
});

  
$(function() {

  $('.menu-btn').on('click', function() {
    if($('.menu-btn').hasClass('active')) {
        $('.sp-header-nav').fadeOut();
        $('.side-application').fadeOut();
        $('.sp-menu-back').fadeOut();
    } else {
        $('.sp-header-nav').fadeIn().css('display');
        $('.side-application').fadeIn().css('display');
        $('.sp-menu-back').fadeIn().css('display');
    }
    $('.menu-btn').toggleClass('active');
  });

  $('.sp-menu-back').on('click', function(){
    if($('.menu-btn').hasClass('active')) {
      $('.sp-header-nav').fadeOut();
      $('.side-application').fadeOut();
      $('.sp-menu-back').fadeOut();
  } else {
      $('.sp-header-nav').fadeIn().css('display');
      $('.side-application').fadeIn().css('display');
      $('.sp-menu-back').fadeIn().css('display');
  }
  $('.menu-btn').toggleClass('active');
  });

  $('#scroll-link a[href*="#nursery"]').click(function () {
    let elmHash = $(this).attr('href');
    let pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos}, 1000);
    return false;
  });
  
  $('#topup-btn a[href*="#main-container"]').click(function() {
      let elmHash = $(this).attr('href');
      let pos = $(elmHash).offset().top;
      $('body,html').animate({scrollTop: pos}, 1000);
      return false;
  });

  $(".btnWrap").click(function(){
    $(this).prev(".nursery-wrap").toggleClass("open");
  });

});


