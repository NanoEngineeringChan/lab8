var data = {
  rsvp: ['ixd@ucsd.edu']
};

exports.addRSVP = function(req, res){

	var rsvpEmail = req.body.rsvpEmail;
	data.rsvp.push(rsvpEmail);
  	res.send(rsvpEmail);
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};
