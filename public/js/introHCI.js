// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here

$(function(){
	$(".judge-img").bind("taphold", tapholdHandler );

		function tapholdHandler(event){
			var targetIDPrefex = event.target.id;
			$("#" + targetIDPrefex + "-bio").show();
		}
});

}

// init RSVP form submit listener
function initRSVPForm() {
	$('#rsvpForm').submit(function(e) {
		e.preventDefault();
		var rsvpEmail = $('#rsvpEmail').val();


		$.post('addRSVP', {	rsvpEmail: rsvpEmail }, postCallback);
	});

	function postCallback(res) {
		alert("rsvp submitted");
		$('#rsvpEmail').val('');
	}
}


$(function(){
	$("div.box").bind("taphold", tapholdHandler );
	function tapholdHandler(event){
		$(event.target).addClass ("taphold");
	}
});