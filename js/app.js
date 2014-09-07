$(document).ready( function () {

/* Navbar buttons*/
function search () {
    var location = $(document).find('input[name="search"]').val();
	getGoogleMaps(location);
	getInstagram(location);
	console.log(location);
}

$('#searchButton').on('mousedown', function (event) { 
    search();
});

$(document).find('input[name="search"]').on('keydown', function (pressenter) {
    if (pressenter.keycode === 13) {
     search();
    };
});

$('#aboutButton').on('mousedown', function(){



});
/*Google Maps Api*/

function getGoogleMaps (location) {
	var key = 'AIzaSyA9R0s5sg2INloAiY9IHOruKNHQgrN1dS0';
	var zoom = '16';
	var iframeElement = $('#googleMap');
	iframeElement.attr('src','https://www.google.com/maps/embed/v1/search?key=' + key + '&zoom=' + zoom + '&q='+location);
}
/*instagram Api*/

function getInstagram (location){
	$('#instafeed').children().remove();
    var feed = new Instafeed ({
          get: 'tagged',
          tagName: location,
          clientId: '247fae46590145138b72d9e2d47d9231',
          sortBy:'most-recent',
          limit: 12
    });
    feed.run();
}

/*twitter Api*/


/*Foursquare Api*/












});





