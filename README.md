# 🎬 Movie Analysis Project

Welcome to the Movie Analysis project! This project provides a set of helpful functions for analyzing and working with a collection of movie data.

<br>

## 🚀 Instructions

To set up and run this project locally, follow these steps:

1. 📦 Clone the project repository:

```shell
git clone https://github.com/sergi-moliner/Sprint-3/
```

🗂️ 2.Navigate to the project directory.

📝 3.Open the project in your preferred code editor.

<br>

## Running Tests 🧪

This project includes unit tests for each of the aforementioned functions. You can run the tests using a JavaScript testing environment like Jest.

To execute the tests, make sure you have Jest installed and then run the following command:

```shell
$ npm install
$ npm run test:watch
```

And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

<br>

## Available Functions 🛠️

### 1. `getAllDirectors(array)`

This function returns an array containing all the directors from the provided movies.

### 2. `getMoviesFromDirector(array, director)`

Returns an array with all the movies directed by a specific director.

### 3. `moviesAverageOfDirector(array, director)`

Calculates the average score of movies directed by a given director.

### 4. `orderAlphabetically(array)`

Alphabetically sorts movies by title and returns the top 20 titles in an array.

### 5. `orderByYear(array)`

Sorts movies by release year, in ascending order, and then alphabetically by title if they have the same release year.

### 6. `moviesAverageByCategory(movies, genre)`

Calculates the average score of movies in a specific genre.

### 7. `hoursToMinutes(array)`

Converts the duration of movies from hours and minutes to minutes.

### 8. `bestFilmOfYear(movies, year)`

Returns the best movie of a specific year.
