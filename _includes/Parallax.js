/**
 * Parallax effect.
 *
 * See Smoothing the parallax scrolling of a background image http://stackoverflow.com/questions/15789026
 * See Perfecting Parallax Scrolling https://github.com/Form5/parallax
 * See Adventures in Jank Busting: Parallax, performance http://code.flickr.net/2013/06/04/adventures-in-jank-busting-parallax-performance-and-the-new-flickr-home-page/
 * See Fixing a parallax scrolling website to run in 60 FPS http://kristerkari.github.io/adventures-in-webkit-land/blog/2013/08/30/fixing-a-parallax-scrolling-website-to-run-in-60-fps/
 */

$(window).on('scroll', function() {
  // Does not make any difference
  //window.requestAnimationFrame(translate3dY);

  translate3dY();
});

var $parallax = $('.parallax-bg');
var speed = 0.5;

function translate3dY() {
  // Too slow on mobile devices: uses the CPU instead of the GPU
  //$parallax.css('background-position', '50% ' + window.pageYOffset * speed + 'px');

  $parallax.css('transform', 'translate3d(0, ' + window.pageYOffset * speed + 'px, 0)');
}
