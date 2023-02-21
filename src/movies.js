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
    let counter = 0;
    let response = moviesArray.reduce((accumulator, movie) => {
        const { score } = movie;
        counter++;
        return (score && score !== '') ? accumulator + score : accumulator + 0;
    }, 0);

    return response ? Number((response / counter).toFixed(2)) : 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let moviesClone = [...moviesArray];
    let counter = 0;
    let response = moviesClone.reduce((accumulator, movie) => {
        const { genre, score } = movie;
        counter++;
        if (genre.includes(DRAMA_GENRE)) {
            return (score && score !== '') ? accumulator + score : accumulator + 0;
        }
    }, 0);
    return response? Number((response / counter).toFixed(2)) : 0;
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
function turnHoursToMinutes(moviesArray) {
    let moviesClone = [...moviesArray];
    let response = moviesClone.map((movie) => {
        const { duration } = movie;
        let durationInMinutes = 0;
        duration.split(' ').map(x => x.replace(/\D/g,'')).forEach((item, index) => {
            index === 0 ? durationInMinutes += item * 60 : durationInMinutes += item *1;
        });;

        return {
            ...movie,
            duration: durationInMinutes
        }
    });
    return response; 
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray == null || moviesArray.length === 0) {
        return null;
    }
    let moviesClone = [...movies];
    let moviesGroupedByYear = moviesArray.reduce((r, a) => {
        r[a.year] = [...r[a.year] || [], a];
        return r;
       }, {});
}
