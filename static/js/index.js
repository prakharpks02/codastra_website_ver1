// Making the Timer

// Finding the time difference
function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

// Setting the clock in HTML
function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();

	// Looping the Update clock code for dynamic feel on page
	var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(2020, 10, 15, 23, 0, 0, 0);
console.log(deadline);
initializeClock('clockdiv', deadline);


// Opening Overlay for Register


function overlayToggle(){
	document.getElementById('overlay-container-id').classList.toggle('hide');
}

function GetNotified(){
	document.getElementById('get-notified-error-id').classList.toggle('hide');
}