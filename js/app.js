$(document).ready( function () {

/* Navbar buttons*/
function search () {
    var fTeam = $(document).find('input[name="search"]').val();
    console.log(fTeam);
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

 function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

 /* instgram Api */






});