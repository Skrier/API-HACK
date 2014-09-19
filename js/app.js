$(document).ready( function () {
    /* Gloabl variables*/
    var lat;
    var long;

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

	$(document).find('input[name="search"]').on('keyup', function (event) {
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
			maxResults: '1'	
		};
	    var request = $.ajax({
	    	url: 'http://dev.virtualearth.net/REST/v1/Locations?',
	    	data: params,
	    	dataType:'jsonp',
	    	type: 'GET',
	    	jsonp: 'jsonp'
	    })
	    .done(function(request){
	    	console.log(request);
	    	lat = console.log(request.resourceSets[0].resources[0].geocodePoints[0].coordinates[0]);
	    	long = console.log(request.resourceSets[0].resources[0].geocodePoints[0].coordinates[1]);
	    	return lat
	    	return long
	    })
	    .fail(function (jqXHR, error, errorThrown){
	    	console.log(error);
	    });
	};
	/* Google Api */
	function iframe (address) {
			var iFrameLocation = $('iframe');
			iFrameLocation.attr('src','https://www.google.com/maps/embed/v1/place?q=' +address+'&key=AIzaSyDex2UEUst7Y46h6_jlf4KDdVmY6ws8jGw');
	}
	 /* instagram Api */






});