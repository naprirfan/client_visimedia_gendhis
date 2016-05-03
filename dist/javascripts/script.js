$(document).ready(function(){
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

    var images = [
        "https://www.dropbox.com/s/dakyyuwenfk0hgx/officespace.jpg?raw=1",
        "https://www.dropbox.com/s/29maewric9z7vwk/circuit.jpg?raw=1",
        "https://www.dropbox.com/s/nxqiies7po29u98/American-skyscrapers.jpg?raw=1",
        "https://www.dropbox.com/s/po7sdzsifxi5pgx/laptop.jpg?raw=1"
    ];
    var ready = 0;

    for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];
        img.onload = function() {
            ready++;
            onImageReady();
        }
    }

    function onImageReady() {
        if (ready < images.length) {
            return;
        }

        console.log('image ready');
        $("#customModal").hide();
        $("#content").fadeIn();
    }
});