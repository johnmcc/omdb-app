var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var getUrl = function(searchTerm){
  return "http://www.omdbapi.com/?t=" + searchTerm;
};

var requestComplete = function(){
  var responseString = this.responseText;
  var movie = JSON.parse(responseString);

  showUI(movie);
};

var showUI = function(movie){
  var myMovieInfo = {
    title: movie.Title,
    director: movie.Director,
    actors: movie.Actors,
    poster: movie.Poster
  };
  var myMovie = new Movie(myMovieInfo);
  
  var movieDiv = document.getElementById("movie");
  movieDiv.innerHTML = "";

  movieDiv.appendChild(myMovie.getHtml());

  movieDiv.classList.add("hasContent");
};

var app = function(){
  var searchLink = document.getElementById("search");
  
  searchLink.onclick = function(){
    var textInput = document.querySelector('input[type="text"]');
    var searchTerm = textInput.value;
    var url = getUrl(searchTerm);
    makeRequest(url, requestComplete);
  };
};

window.onload = app;