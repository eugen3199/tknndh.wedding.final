/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
var play = false;
var init = true;

$(document).on('click', function(){
    if (init == true) {
        document.getElementById("my_audio").play();
        console.log('play');
        init = false;
        play = true;
    }
});

$("#play").on('click', function(){
    if (play == false) {
        document.getElementById("my_audio").play();
        console.log('play');
        play = true;
    }
    else{
        document.getElementById("my_audio").pause();
        console.log('pause');
        play = false;
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Nov 25, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var day1 = days/10;
    var day2 = days%10;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = '<div class="container p-4 text-center"><p class="dance-med">Only</p><div class="row"><div class="col-6 p-2"><div class="position-relative bh"><h1 class="position-absolute top-50 start-50 translate-middle">'+ ~~day1 +'</h1></div></div><div class="col-6 p-2"><div class="position-relative bh"><h1 class="position-absolute top-50 start-50 translate-middle">'+ day2 +'</h1></div></div><p class="text-pink dance-med">Days left before our wedding day!</p></div>';
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

$("#scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#section1").offset().top},
        'slow');
});

$("#location").click(function() {
    $('html,body').animate({
        scrollTop: $("#tar_location").offset().top},
        'slow');
});
// console.log('\n\n%c SAVE THE DATE: 29th Nov, 2020!', styles);

// console.log('%cYour presence is requested!%c\n\nRegards: Vinit Shahdeo', styles1, styles2);

// console.log(
//     `%cShaadi me zaroor aana!\n\n`,
//     'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
// )
