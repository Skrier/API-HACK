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

/* Bing API */

var getGeoLocation = function (address) {

	var params = {
		key: 'Atq5GRPbpmMXICsUMY6l2ILicZ3HNVgTqd0bVHPx8o5VCxWGadaKxUVArVrisehF',
		locality: address,
		maxResults: '1',
		o:'json&jsonp=?'
	};
    var request = $.ajax({
    	url: 'http://dev.virtualearth.net/REST/v1/Locations?',
    	data: params,
    	dataType: 'jsonp',
    	type: 'GET'
    }).done(function(request){
    	console.log(request);
    	console.log(request.resourceSets.resources.geocodePoints.coordinates);
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