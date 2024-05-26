const movieIDInput = document.getElementById('film-id')
const movieTitle = document.getElementById('movie-title')
const movieDirector = document.getElementById('director')
const movieSummary = document.getElementById('summary')
const movieReleaseDate = document.getElementById('release-date')
const movieUrl = document.getElementById('url')

async function fetchMovieData(movieID) {
  const response = await fetch(`https://swapi.dev/api/films/${movieID}`);
  if (response.ok) {
    const data = response.json();
    console.log(data)
    return data
  } else {
    throw new Error("Error fetching movie data");
  }
}

function displayMovieData(movieData) {
  const { title, director, opening_crawl, release_date, url } = movieData;
  // if (!title) {
  //   movieTitle.innerHTML = `No movie data`
  //   movieDirector.innerHTML = `Director: No movie data`
  //   movieSummary.innerHTML = `No movie data`
  //   movieReleaseDate.innerHTML = `Release date: No movie data`
  // } else {
    movieTitle.innerHTML = `${title}`
    movieDirector.innerHTML = `Director: ${director}`
    movieSummary.innerHTML = `Opening crawl: ${opening_crawl}`
    movieReleaseDate.innerHTML = `Release date: ${release_date}`
    movieUrl.innerHTML = `Url: ${url}`
  // }
}

async function searchMovie() {
  const movieId = movieIDInput.value;
  const movieData = await fetchMovieData(movieId)
  displayMovieData(movieData)
}