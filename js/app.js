//EXPANDABLE MENU

var navBtn = document.querySelector('.nav-btn');
var navTop = document.querySelector('.nav-top');

navBtn.addEventListener('click', function (eventObject) {
	//Using eventObject, can stop the link from doing what it normally does--namely targeting to the bottom of the page
	eventObject.preventDefault();

	if (navTop.getAttribute('data-state') == 'open') {
		navTop.setAttribute('data-state', 'closed');
	} else {
		navTop.setAttribute('data-state', 'open');
	}
}, false);

//VIDEO
var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));

$('.placeholder').on('click', function () {
	$placeholder.html('<iframe src="http://player.vimeo.com/video/81441143?color=c9ff23&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
	//.get() returns the native JS element for us to access
	//When using jQuery we don't have access to the original HTML elements directly; we are using jQuery to manipulate them
	$dialog.get(0).showModal();
	//.show() allows multiple dialogs
	//.showModal() single dialog, with no user interaction behind (darkens background)
});

$('#btn-close').on('click', function () {
	$dialog.get(0).close();
	$placeholder.html('');
});


//CAROUSEL
var $items = $('.carousel-items img');
var switchItems = function (outgoing, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(outgoing).attr('data-state', '').hide();
		$items.eq(incoming).attr('data-state', 'current');
	});
	//.eq specifies a specific number
};

$items.filter(':not([data-state="current"])').hide();
	//This hides the images that are not being shown


//NEXT BUTTON:
$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	//.index allows jquery to keep a count
	var next = current + 1;

	if (next >= $items.length) {
		next = 0;
		//This will loop the carousel back to image 0
	}

	switchItems(current, next);
});

//PREVIOUS BUTTON:
$('.previous').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	//.index allows jquery to keep a count
	var previous = current - 1;

	if (previous < 0) {
		previous = $items.length - 1;
	}
	//Don't actually need to have an if statement when going backwards to the end

	switchItems(current, previous);
});

//LOGO ANIMATION
var $win = $(window);
var $plane = $('.plane');

$win.on('scroll', function () {
	$plane.css('transform', 'rotate('+ $win.scrollTop()/5 +'deg)');
});

//RANDOM TESTIMONIALS
var rand = Math.round(Math.random() * 2); 
	//Math.round rounds the number up, so that it's no longer decimal numbers
	//Multiply by 2 so that the number can go up to 2 (if not, it's just decimal numbers ≤ 1)
var file = 'testimonial-' + rand +'.html';
	//This generates the random file name

//console.log(file); This will test it out

$('.rand-test').load(file);