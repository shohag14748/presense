$(document).ready(function() {
  //using jQuery syntax or quantdom.js library
  $('.packages .varient').on('click', function(){
    const variantId = $(this).attr('data-variant-id');
    $('shopify-payment-terms').attr('variant-id', variantId);
  });
  
  $('.faq-heading').click(function(){
    $(this).toggleClass('active').siblings().slideToggle(300);
  }) 
  $('.varient').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $(".selected-option").text($(this).find(".size").text());
    $(".single-option-selector").val($(this).find(".size").text()).change();
  }) 
  $('a.button2').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 130
      },1000);
      return false;
  });
  $('.tap-on-video').click(function () {

    // Add Autoplay function to video
    const iframeElement = $(this).siblings('.video').find('iframe');
    const urlVideo = iframeElement.attr('src');
    if(!urlVideo.includes('autoplay=1')){iframeElement.attr('src', `${urlVideo}&autoplay=1`);}
    
    var videoht = $(this).siblings('.video').html();
    console.log(videoht)
    $('body').append(`<div class="video-popup"><span class="icon icon-cross"></span>${videoht}</div>`);
  })


  
  $(document).on('click','.video-popup .icon-cross', function () {
    $('.video-popup').remove();
  })
  $(document).on('click','.announcement-bar .icon-cross', function () {
    $('.announcement-bar').remove();
    $('body,.sticky-header').attr('style','').addClass('no-announcement');
  })
  
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  $('.app-share').click(function () {
    copyToClipboard('.url');
    $('.share-popup').show();
    const myTimeout = setTimeout(hidecopy, 1500);
    function hidecopy() {
      $('.share-popup').hide();
    }
  });
});
