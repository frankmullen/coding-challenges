// handles the click event, sends the query
function getMovieById(id) {
	var dfd = new $.Deferred();
    $.ajax({
        url:"https://api.themoviedb.org/3/movie/"+id +"?api_key=35e16679c616a21b9ddebb66272c5902",
         dataType: "json",
        complete: function (response) {          
            var movie = response.responseJSON;
			return dfd.resolve( movie );
        },
        error: function () {
			return dfd.reject( "error on ajax call" );
        },
    });
    return dfd.promise();;
}
// handles the click event, sends the query
function getMovie(id) {
	getMovieById(id).then(function(movie) {
	        //getMovieById finished process results.
			//better as we've removed dependency on html
			//need to stringify to display results.
		$('#output').html(JSON.stringify(movie));
        $('#overview').html(movie.overview);		
	},
	function(message) {
		 $('#output').html('Bummer: there was an error! ' + message);
	}
	);
}
// handles the click event, sends the query
$(document).ready(function(){
  
    $("#moviedetails").click(function(){
        	getMovie(206647);
    });
});