$('.loadMoreBtn').click(function(){
var blog_on_page = $(document).find('.post-wrapper');
var next_url = blog_on_page.data('next-url');
var load_more_text = $('.loadMoreBtn .txt');
var load_more_dots = $('.loadMoreBtn .dots');  

  $.ajax(
    {
      url:next_url,
      type:'GET',
      dataType:'html',  
      beforeSend: function(){
      	load_more_text.hide();
        load_more_dots.show();
      }
    }
  ).done(function(next_page){
    
      load_more_dots.hide();
    
      var new_blogs = $(next_page).find('.post-wrapper');
      var new_url = new_blogs.data('next-url');
    if(new_url){
    	load_more_text.show();
      blog_on_page.data('next-url',new_url);
    }else{
    	$('.loadMoreBtn').hide();
      // blog_on_page.attr('data-next-url','');
      blog_on_page.data('next-url', '');
    }
      // next_url = new_url;
      blog_on_page.append(new_blogs.html());
    
      var activeClass = $('.button-category-tag.active').attr('data-tag');
      if(activeClass != 'all'){
        $('.blogs-page .list-container .tags').attr('data-tag',activeClass).empty().append(`<span class="tag ${activeClass}">${activeClass}</span>`);
      }
  });
  
});

$('.button-category-tag').click(function(){
  $('.button-category-tag').removeClass('active');
  $(this).addClass('active');
  
  var blog_on_page = $('.post-wrapper-parent');
  var tag_url = $(this).data('hrf');  
  var load_more_text = $('.loadMoreBtn .txt');
  var load_more_dots = $('.loadMoreBtn .dots'); 
  activeClass = $(this).attr('data-tag');
    $.ajax(
      {
        url:tag_url,
        type:'GET',
        dataType:'html',  
        beforeSend: function(){
        }
      }
    ).done(function(next_page){
      var new_blogs = $(next_page).find('.post-wrapper-parent');
      blog_on_page.empty().append(new_blogs.html());
      if(activeClass != 'all'){
        $('.blogs-page .list-container .tags').attr('data-tag',activeClass).empty().append(`<span class="tag ${activeClass}">${activeClass}</span>`);
      }
      var new_url = new_blogs.find('.post-wrapper').data('next-url');
      if(new_url){
      	$('.loadMoreBtn').show();
        load_more_text.show();
      }else{
      	$('.loadMoreBtn').hide();
      }
    });
})
  




