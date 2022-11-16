/* Custom code */
$(window).on("load", function() {
  if ( $('.welcome__video-button').length ) {
    $('.welcome__video-button').click( function(e) {
      $('#video-popup').show();
      openVideoPopup( $( this ).attr("href") );
      e.preventDefault();
    });
  }

  if ($('#video-popup').length) {
    $("#video-popup").detach().appendTo('body');
    $('#video-popup').click( function(e) {
      $('#video-popup').hide();
      stopVideo($(".embed-container").first());
    });
  }
});

function openVideoPopup(videoURL) {
  if ( $(".embed-container").length ) {
    var isIframe = videoURL.indexOf("vimeo") != -1 || videoURL.indexOf("youtube") != -1;

    element = $(".embed-container").first();
    var iframe = element.find('iframe');
    var video = element.find('video');

    $(".embed-container").show();

    if (isIframe) {
      if (videoURL.indexOf("youtube") != -1 ) {
        iframe[0].src = videoURL;
        iframe[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      }
      else {
        iframe[0].src = videoURL;
      }
    }
    else {
      video[0].src = videoURL;
      video[0].play();
    }

    if ( isIframe ) iframe.show();
    else video.show();
  }
}

var stopVideo = function ( element ) {
  var iframe = element.find( 'iframe').first();
  var video = element.find( 'video' );
  if ( iframe.length ) {
    iframe[0].src = "";
  }
  if ( video.length ) {
    video[0].pause();
    video[0].currentTime = 0;
  }
  iframe.hide();
  video.hide();
};