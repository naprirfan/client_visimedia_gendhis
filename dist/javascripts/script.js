$(".navButton").click(function(e) {
    e.preventDefault();
  
    //close collapsed navbar
    if($('.navbar-toggle').css('display') !='none'){
      $(".navbar-toggle").trigger( "click" );
    }
    
    //animate to section
    var _this = $(this);
    $('html, body').animate({
        scrollTop: $('#' + _this.data('section')).offset().top
    }, 300);
});