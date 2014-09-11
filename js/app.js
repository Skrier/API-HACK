$(document).ready( function () {

/* Navbar buttons*/
function search () {
    var address= $(document).find('input[name="search"]').val();
    console.log(address);
    iframe(address);
    getGeoLocation(address);
    
}

$('#searchButton').on('mousedown', function (event) { 
	search();
});

$(document).find('input[name="search"]').on('keydown', function (event) {
	event.stopPropagation();
	if (event.which === 13) {
    search();
	}
});

$('#aboutButton').on('mousedown', function(){

 });

/* google API */

var getGeoLocation = function (address) {

	var params = {
		key: 'AIzaSyA9R0s5sg2INloAiY9IHOruKNHQgrN1dS0',
		address: address
	};
    var request = $.ajax({
    	url: 'https://maps.googleapis.com/maps/api/geocode/json?',
    	data: params,
    	type: 'GET'
    }).done(function(request){
    	console.log(request);
    	console.log(request.results.geometry.location.lat);
    	console.log(request.results.geometry.location.lng);
    }).fail(function (jqXHR, error, errorThrown){
    	console.log(error);
    });
};

function iframe (address) {
		var iFrameLocation = $('iframe');
		iFrameLocation.attr('src','https://www.google.com/maps/embed/v1/place?q=' +address+'&key=AIzaSyA9R0s5sg2INloAiY9IHOruKNHQgrN1dS0');
}

 /* instgram Api */






});