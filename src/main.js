const api = axios.create({
     baseURL: 'https://api.themoviedb.org/3/',
     headers: {
        'Content-Type': 'application/json;charset-8',
     },

     params: {
        'api_key': API_KEY,
     },
});


async function getTrendingMoviesPreview () {
    const { data } = await api(`trending/movie/day`);
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


        movieImg.addEventListener('click', () => {
            movieDetailContainer.classList.remove('inactive')
        })
    });
}
//getTrendingMoviesPreview();/////////////////////
////////////////////


async function getGenresMoviesPreview () {
    const { data } = await api(`genre/movie/list`);
    const allGenres = data.genres;

    console.log(data);
    console.log(allGenres)
    allGenres.forEach(genre => {
        const categoriesContainer = document.querySelector('#aside .categories-container-h2')
        const categoriesContainerSection = document.querySelector('#categories-container-section')

        const genreContainer = document.createElement('div')
        genreContainer.classList.add('category')

        const genreH2 = document.createElement('h3')
        genreH2.innerText = genre.name

            genreContainer.appendChild(genreH2)
            categoriesContainerSection.appendChild(genreContainer)
            categoriesContainer.appendChild(categoriesContainerSection)

            ///add function trendPage() to the listener
            genreH2.addEventListener('click', () => {
                trendingContainerTitleButton.classList.add('inactive')
                sectionTrendsContainer.classList.add('inactive')
            
                categoriesMoviesContainer.classList.remove('inactive')
                categoriesContainerH2.classList.add('inactive')
            
            })
        
            
    })
}

