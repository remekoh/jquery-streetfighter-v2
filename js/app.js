$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	})
	.mousedown(function() {
		playHadouken()
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.hadouken').finish().show().animate(
		  {'left': '1020px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '600px');
  		}
		);
	})
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
	});
}).keydown(function() {
	if (keyCode = 88) {
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
        $('.ryu-still').hide();
        $('.ryu-throwing').hide();
    } 
}).keyup(function() {
    if (keyCode = 88) {
        $('.ryu-cool').hide();
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
    }
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}