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
	event.preventDefault();
	event.stopPropagation();
	if (event.which === 13) {
    search();
	}
});

$('#aboutButton').on('mousedown', function(){

 });

 /* football API */

  /* Get Competitions */

var getCompetition = function () {
	var request = {
		APIKey:'6580f7ec-ffaa-823b-2165456a6091'
	}
	var result = $.ajax({
		url:'http://football-api.com/api/?Action=competitions',
		data: request,
		datatype: 'jsonp',
		method:'GET'
	})
	.done(function(result){
    console.log(result);
	})
	.fail(function(jqXHR, error, errorThrown){
     console.log(error);
	});
};

getCompetition();





});