var Movie = function(myMovieInfo){
  this.title = myMovieInfo.title;
  this.actors = myMovieInfo.actors;
  this.director = myMovieInfo.director;
  this.poster = myMovieInfo.poster;
};

Movie.prototype = {
  getHtml: function(){
    var wrapper = document.createElement('div');

    var h2 = document.createElement('h2');
    h2.innerText = this.title;

    var ul = document.createElement('ul');

    var actorsLi = document.createElement('li');
    actorsLi.innerText = this.actors;

    var directorLi = document.createElement('li');
    directorLi.innerText = this.director;

    ul.appendChild(actorsLi);
    ul.appendChild(directorLi);

    var img = document.createElement('img');
    img.src = this.poster;

    wrapper.appendChild(h2);
    wrapper.appendChild(ul);
    wrapper.appendChild(img);

    return wrapper;
  }
};