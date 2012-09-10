$(document).ready(function(){
		ticker();
});

function ticker(){
	setTimeout(tickerExecutor, 2000);
	var first = $('.ticker-item:first').text();
	$('.ticker').append('<div class="ticker-item">'+first+'</div>');
	$('.ticker').css('top', '-1em');
	$('.ticker-item:first').remove();
}

function tickerExecutor(){
	$('.ticker').animate({
    	top: '-=2.3em'
  	}, 1000 );

  	$('.ticker').animate({
    	top: '+=.5em'
  	}, 200 );

  	$('.ticker').animate({
    	top: '-=.2em'
  	}, 100 , ticker);
}
