$(document).ready(function(){
    $('.menu-toggler').on('click',function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    $('.top-nav .nav-link').on('click',function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
    });
    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});

function audioPlayer(){
    var currentSong =0;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#playlist li a").click(function(e){
      e.preventDefault();
      $("#audioPlayer")[0].src = this;
      $("#audioPlayer")[0].play();
      $("#playlist li").removeClass("current-song");
      currentSong = $(this).parent().index();
      $("#playlist li:eq("+currentSong+")").addClass("current-song");
      $(this).parent.addClass("current-song");
    });
    $("#audioPlayer")[0].addEventListener("ended", function(){
      $("#playlist li").removeClass("current-song");
      $("#playlist li:eq("+currentSong+")").addClass("current-song");
      $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
    });
  }