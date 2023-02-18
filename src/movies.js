const STEVEN_SPIELBERG_DIRECTOR = 'Steven Spielberg';
const DRAMA_GENRE = 'Drama';
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => {
        return movie.director;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let movies = moviesArray.filter((movie) => {
        if (movie.director === STEVEN_SPIELBERG_DIRECTOR && movie.genre.includes(DRAMA_GENRE)) {
            return movie;
        }
    })
    return movies ? movies.length : 0;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let response = moviesArray.reduce((accumulator, movie) => {
        return accumulator + movie.score;
    }, 0);

    return response ? response.toFixed(2) : 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let scores = moviesArray.filter((x) => x.genre.includes('Drama')).map(x => x.score);
    let scoresSize = scores.length;
    if (scores === 1) {
         return scores[0];
    }
    let response = scores.reduce((accumulator, score) => {
        return accumulator + score;
    }, 0);
    console.log(response);
    return response ? (response / scoresSize).toFixed(2) : 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let response = [];
    let moviesClone = [...moviesArray];
    response = moviesClone.sort((a, b) => {
        return a.year - b.year;
    })
    return response.slice(0, 20);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesClone = [...moviesArray];
    return moviesClone.map(x => x.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
