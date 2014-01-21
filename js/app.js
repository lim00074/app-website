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
