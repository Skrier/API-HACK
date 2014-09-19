$(document).ready( function () {
    /* Gloabl variables*/
    var lat;
    var long;
    var id;

	/* Navbar buttons*/
	function search () {
	    var address= $(document).find('input[name="search"]').val();
	    console.log(address);
	    iframe(address);
	    getGeoLocation(address);
	    getLocationID(lat,long); 
	    getLocationMedia(id);  
	}

	$('#searchButton').on('mousedown', function (event) { 
		search();
	});

	$('#textBox').on('keyup', function (event) {
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
	    	jsonp: 'jsonp',
	    	cache: false
	    })
	    .done(function(request){
	    	console.log(request);
	    	lat = console.log(request.resourceSets[0].resources[0].point.coordinates[0]);
	    	long = console.log(request.resourceSets[0].resources[0].point.coordinates[1]);
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
	var getLocationID = function(lat,long) {
        var params = {
        	client_id: '247fae46590145138b72d9e2d47d9231',
        	LAT: lat,
        	lNG: long,
        	distance: '500',
        	callback: 'callbackFunction'
        };
        var request =$.ajax({
        	url: 'https://api.instagram.com/v1/locations/search?',
            dataType: 'jsonp',
            cache: false,
            type: 'GET'

        })
        .done(function(request){
        	console.log(request);
        	console.log(request.data[0].id);
        })
        .fail(function (jqXHR, error, errorThrown){
	    	console.log(error);
	    });       
	};

	var getLocationMedia = function (id) {
		var params = {
        	client_id: '247fae46590145138b72d9e2d47d9231',  
        	callback: 'callbackFunction'
		}
        var request =$.ajax({
        	url: 'https://api.instagram.com/v1/locations/'+ id+'/media/recent?',
            dataType: 'jsonp',
            cache: false,
            type: 'GET'
        })
        .done(function(request){
        	console.log(request);
        	console.log(request.data.images.thumbnail.url);
        })
        .fail(function (jqXHR, error, errorThrown){
	    	console.log(error);
	    });     
	}

});