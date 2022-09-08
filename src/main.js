async function getTrendingMoviesPreview () {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await  response.json();
    
    const movies = data.results;
    console.log(data);
    console.log(movies)
    movies.forEach(movie => {
        const mainContainer = document.querySelector('#main-container #section-main-container');

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movies-container')

        const movieImg = document.createElement('img');
        movieImg.classList.add('movies-container-img');
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`)

        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movies-container-img-name');
        movieTitle.innerText = movie.title;

            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
            mainContainer.appendChild(movieContainer)
    });
}
getTrendingMoviesPreview();/////////////////////
////////////////////


async function getGenresMoviesPreview () {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const data = await  response.json();
    
    const allGenres = data.genres;
    console.log(data);
    console.log(allGenres)
    allGenres.forEach(genre => {
        const genreMainContainer = document.querySelector('#aside #categories-container');

        const genreContainer = document.createElement('div');
        genreContainer.classList.add('category')

        const genreH2 = document.createElement('h3');
        genreH2.innerText = genre.name;

            
            genreContainer.appendChild(genreH2);
            genreMainContainer.appendChild(genreContainer)
    });
}
getGenresMoviesPreview();