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
