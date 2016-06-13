$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
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
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	})
})
.keydown(function(e){
	if (e.keyCode == 88) {
		$('.ryu-still').hide();
		$('.ryu-cool').show();
		$('.ryu-ready').hide();
	}
}).keyup(function(e){
	if (e.keyCode == 88) {
		$('.ryu-still').show();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
	}
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}