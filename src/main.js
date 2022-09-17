const api = axios.create({
     baseURL: 'https://api.themoviedb.org/3/',
     headers: {
        'Content-Type': 'application/json;charset-8',
     },

     params: {
        'api_key': API_KEY,
     },
});
/////////////////////////////////////////////////////////

//////////helper for filterByGenre and filterByValue////////
function movieDetailAside (movies,container) {
    container.innerHTML = '';

    movies.forEach(movie => {
        
        
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movies-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movies-container-img');
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);


        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movies-container-img-name');
        movieTitle.innerText = movie.title || movie.name || 'Not found';

            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
            container.appendChild(movieContainer);

            
            
            categoriesMoviesContainer.appendChild(container);
            categoriesMoviesContainer.appendChild(categoriesContainerTitle);
            categoriesContainer.appendChild(categoriesMoviesContainer);




        //listener  for  every img that will show the details

            movieImg.addEventListener('click', () =>{ movieDetails(movie.id)})

    
    })

}

//////// helper for getTrendingMoviesPreview  and getAllTrends//////

function trendsGenerator (movies) {
    movies.forEach(movie => {
        

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movies-container')

        const movieImg = document.createElement('img');
        movieImg.classList.add('movies-container-img');
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

    //listener  for  every img that will show the details
        movieImg.addEventListener('click', () =>{ movieDetails(movie.id)})

        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movies-container-img-name');
        movieTitle.innerText = movie.title || movie.name;

            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
            mainContainer.appendChild(movieContainer);

    });


}

////helperfunction creates a container with the details  by movie//
 async function movieDetails(movieID) {
    const { data: movie } = await api(`movie/${movieID}`);
     
   // console.log(movie)


            movieDetailContainer.innerHTML = '';
            movieDetailContainer.classList.remove('inactive');
            
            const containerCloseImg = document.createElement('div');
            containerCloseImg.classList.add('movie-detail-close');
            containerCloseImg.addEventListener('click',()=> {movieDetailContainer.classList.add('inactive')} );
               
            const imgClose = document.createElement('img');
            imgClose.classList.add('movie-detail-close-icon');
            imgClose.setAttribute('src', './styles/img/close_icon.png');
            

            containerCloseImg.appendChild(imgClose);
            
                
            const movieImgContainer = document.createElement('img');
            movieImgContainer.setAttribute('src',`https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
            
            
               
            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-info');
            const detailMoviename = document.createElement('p'); 
            const releaseDate = document.createElement('p');
            const overView = document.createElement('p');
            const  sourceData = document.createElement('a');            
             
            detailMoviename.innerText = movie.original_title || movie.name; 
            releaseDate.innerText = `Rate: ${movie.vote_average}`;
            overView.innerText = movie.overview;
            sourceData.innerText = "More info..."
            sourceData.href = movie.homepage

            movieInfo.appendChild(detailMoviename); 
            movieInfo.appendChild(releaseDate); 
            movieInfo.appendChild(overView); 
            movieInfo.appendChild(sourceData); 


            movieDetailContainer.appendChild(containerCloseImg);
            movieDetailContainer.appendChild(movieImgContainer); 
            movieDetailContainer.appendChild(movieInfo);   
            sectionContainerOfDetailsAndTrends.appendChild(movieDetailContainer);   

            
 }

////////////////////////////////////////

async function getTrendingMoviesPreview () {
    const { data } = await api(`trending/movie/day`);
    const movies = data.results;
    //console.log(data);
    //console.log(movies);

    sectionTrendsContainer.innerHTML = '';

    trendsGenerator(movies)

}


async function getGenresMoviesPreview () {
    const { data } = await api(`genre/movie/list`);
    const allGenres = data.genres;

    //console.log(data);
    //console.log(allGenres);

    categoriesContainerSection.innerHTML = '';

    allGenres.forEach(genre => {
        

        const genreContainer = document.createElement('div');
        genreContainer.classList.add('category');

        const genreH3 = document.createElement('h3');
        genreH3.setAttribute('id', 'id' + genre.id);
        genreH3.addEventListener('click', () => {
            
            console.log('contact')
            categoriesMoviesContainer.innerHTML = '';
            location.hash = `#category=${genre.id}-${genre.name}`;
        });
        
        genreH3.innerText = genre.name;

            genreContainer.appendChild(genreH3);
            categoriesContainerSection.appendChild(genreContainer);
            categoriesContainerSection.appendChild(moviesByCategory);
            categoriesContainer.appendChild(categoriesContainerH3);
            categoriesContainer.appendChild(categoriesContainerSection);


            
    });
}

async function getAllTrends () {
    const { data } = await api(`trending/movie/week`);
    const movies = data.results;
    console.log(data);
    console.log(movies);

    sectionTrendsContainer.innerHTML = '';

    trendsGenerator(movies)


}


async function filterByGenre (id) {
    const { data } = await api('discover/movie', {
      params: {
        with_genres: id,
    },
    });
    const movies = data.results;
    console.log(data);
    console.log(movies);
    console.log('filters allllll');

    
    movieDetailAside(movies, moviesByCategory)


}


async function filterByValue (query) {
    const { data } = await api('search/movie', {
      params: {
        query,
    },
    });
    const movies = data.results;
    console.log(data);
    console.log(movies);
    console.log('buscando');

    
    movieDetailAside(movies, moviesByCategory)

}



