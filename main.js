$(document).ready(()=>{
	$('#searchForm').on('submit',(e)=>{
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});
});

function getMovies(searchText) {
	axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=daf62b50&s="+searchText)
	.then((response)=>{
     console.log(response);
     let movies = response.data.Search;
     let output = "";
     $.each(movies,(index,movie)=>{
     	output +=`<div class="col-md-3"><div class="well text-center"><img src="${movie.Poster}"><h5>${movie.Title}</h5><a class="btn btn-primary" href="#" onclick="movieSelected('${movie.imdbID}')">Details</a></div></div>`;
     });
     $("#movies").html(output);

	})
	.catch((error)=>{
     console.log(error);
	});
}

function movieSelected(id){
	sessionStorage.setItem('movieId',id);
	window.location = 'movie.html';
	return false;
}
function getMovie(){
	let movieId = sessionStorage.getItem('movieId');
	 axios.get('http://omdbapi.com/?apikey=daf62b50&i='+movieId)
	.then((response)=>{
     console.log(response);
     let movie = response.data;
     let output =`<div class="row">
     <div class="col-md-4">
     <img src="${movie.Poster}" class="thumbnail">
     </div>
     <div class="col-md-8">
     <h2>${movie.Title}</h2>
     <ul class="list-group">
     <ul class="list-group-item"><b>Genre:</b>${movie.Genre}</li>
     <ul class="list-group-item"><b>Released:</b>${movie.Released}</li>
     <ul class="list-group-item"><b>Rated:</b>${movie.Rated}</li>
     <ul class="list-group-item"><b>IMDB Rating:</b>${movie.imdbRating}</li>
     <ul class="list-group-item"><b>Director:</b>${movie.Director}</li>
     <ul class="list-group-item"><b>Actors:</b>${movie.Actors}</li>
     </ul>
     </div>
     </div>
     <div class="row">
     <div class="well">
     <h3>Plot</h3>
     <p style="color: white;">${movie.Plot}</p>
     <hr>
     <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-outline-primary">View ImDB</a>
     <a href="https://www.youtube.com/results?search_query=${movie.Title}" target="_blank" class="btn btn-outline-danger">View Trailer</a>
     </div>
     </div>`;

     $("#movie").html(output);
    	})
	.catch((error)=>{
     console.log(error);
	});

}