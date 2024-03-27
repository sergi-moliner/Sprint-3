// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesFound = array.filter(movie => movie.director === director)
  return moviesFound;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = array.filter(movie => movie.director === director);
  let totalScore = directorMovies.reduce((total, movie) => total += movie.score, 0);
  let average = totalScore / directorMovies.length;
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let sortedMovies = array.map(movie => movie.title).sort();
  let top20 = sortedMovies.slice(0, 20);
  return top20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortedMovies = array.map(a => a).sort((a, b) => (a.year !== b.year) ? a.year - b.year : a.title.localeCompare(b.title));
  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let filterMovies = movies.filter(movie => movie.genre.some(g => g === genre));

  if(filterMovies.length === 0){
    return 0;
  }

  let totalScore = filterMovies.reduce((total, movie) => total += movie.score, 0);
  let average = totalScore / filterMovies.length;
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
