//data

const api = axios.create({
     baseURL: 'https://api.themoviedb.org/3/',
     headers: {
        'Content-Type': 'application/json;charset-8',
     },

     params: {
        'api_key': API_KEY,
        'language' : navigator.language || 'en-EN'
     },
});

function likedMoviesList () {
    const item = JSON.parse(localStorage.getItem('liked-movies'));
    let movies;

    if (item) {
        movies = item;
    } else {
        movies = {};
    }
    return movies;
}

function likeMovie (movie) {
    //movie.id
const likedMovies = likedMoviesList();

if (likedMovies[movie.id]) {
    //if the movie is saved then delete
    likedMovies[movie.id] = undefined;
} else {
    //if the movie is not saved then save the complete object
    likedMovies[movie.id] = movie;
}
    localStorage.setItem('liked-movies', JSON.stringify(likedMovies));


    getFavoritesMovieList();
}
/////////////////////////////////////////////////////////

//lazyload

let options = {
    root: null,
    rootMargin: '0px 0px -200px 0px',
    thredhold: null,

};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
        if (entry.isIntersecting) {

            const url = entry.target.getAttribute('data-img')
            entry.target.setAttribute('src',url)

        }
         });
    });


//////////helper for filterByGenre and filterByValue////////
function movieDetailAside (movies, container, {lazyLoad = false}) {

    movies.forEach(movie => {
        
        
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movies-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movies-container-img');
        movieImg.setAttribute(lazyLoad ? 'data-img' : 'src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
        movieImg.setAttribute('alt', movie.title);
        movieImg.addEventListener('click', function() {movieDetails(movie.id);});


        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movies-container-img-name');
        movieTitle.innerText = movie.title || movie.name || 'Not found';

        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-button');

        likedMoviesList()[movie.id] && likeBtn.classList.add('like-button-clicked');
        likeBtn. addEventListener('click', () => {
            likeBtn.classList.toggle('like-button-clicked');
            likeMovie(movie);
            
        });

            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
           movieContainer.appendChild(likeBtn);
            container.appendChild(movieContainer);

            
            
            categoriesMoviesContainer.appendChild(container);
            categoriesMoviesContainer.appendChild(categoriesContainerTitle);
            categoriesContainer.appendChild(categoriesMoviesContainer);


            movieImg.addEventListener('error', () =>{ 

                movieImg.setAttribute('src', 'https://media.istockphoto.com/photos/3d-word-oops-picture-id1067573454?b=1&k=20&m=1067573454&s=612x612&w=0&h=nxI0GWDI1M2Xf5eXkKAFojt6Zc0aXgJRjx0kXV6B5ic=');
            })


        //listener  for  every img that will show the details

            

        
        if(lazyLoad) {observer.observe(movieImg);}
            
                
                
    })
    
}

//////// helper for getTrendingMoviesPreview  and getAllTrends//////

function trendsGenerator (movies, {lazyLoad = false} ={},) {

    movies.forEach(movie => {
    

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movies-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('skeleton');
        movieImg.classList.add('movies-container-img');
        movieImg.setAttribute( lazyLoad ? 'data-img' : 'src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
        movieImg.setAttribute('alt', movie.title);

    //listener  for  every img that will show the details
        movieImg.addEventListener('click', () =>{ movieDetails(movie.id)});

        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movies-container-img-name');
        movieTitle.innerText = movie.title || movie.name;

        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-button');

        likedMoviesList()[movie.id] && likeBtn.classList.add('like-button-clicked');
        likeBtn. addEventListener('click', () => {
            likeBtn.classList.toggle('like-button-clicked');
            likeMovie(movie);
            favoriteMoviestitle.classList.remove('inactive')

        });
            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
            movieContainer.appendChild(likeBtn);
            sectionTrendsContainer.appendChild(movieContainer);
            sectionContainerOfDetailsAndTrends.appendChild(sectionTrendsContainer);

           if(lazyLoad) {observer.observe(movieImg);}

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
            imgClose.setAttribute('alt', 'close');

            containerCloseImg.appendChild(imgClose);

            const movieImgContainer = document.createElement('img');
            movieImgContainer.setAttribute('src',`https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
            movieImgContainer.setAttribute('alt', movie.original_title);
            
            movieImgContainer.addEventListener('error', () =>{ 

                movieImgContainer.setAttribute('src', 'https://media.istockphoto.com/photos/3d-word-oops-picture-id1067573454?b=1&k=20&m=1067573454&s=612x612&w=0&h=nxI0GWDI1M2Xf5eXkKAFojt6Zc0aXgJRjx0kXV6B5ic=')
            })
               
            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-info');
            const detailMoviename = document.createElement('p'); 
            const movieScore = document.createElement('p');
            const overView = document.createElement('p');
            const  sourceData = document.createElement('a'); 
            sourceData.classList.add('movie-web-site');          
             
            detailMoviename.innerText = movie.original_title || movie.name; 
            movieScore.innerText = `⭐ ${movie.vote_average}`;
            overView.innerText = movie.overview;
            sourceData.innerText = "Movie website";
            sourceData.href = movie.homepage || null;

            movieInfo.appendChild(detailMoviename); 
            movieInfo.appendChild(movieScore); 
            movieInfo.appendChild(overView); 
            movieInfo.appendChild(sourceData); 


            movieDetailContainer.appendChild(containerCloseImg);
            movieDetailContainer.appendChild(movieImgContainer); 
            movieDetailContainer.appendChild(movieInfo);   
            mainContainer.appendChild(movieDetailContainer); 
            
            
            
 }

////////////////////////////////////////
 //get  trends today home page
async function getTrendingMoviesPreview () {
    const { data } = await api(`trending/movie/day`);
    const movies = data.results;
    //console.log(data);
    //console.log(movies);

    sectionTrendsContainer.innerHTML = '';

    trendsGenerator(movies, {lazyLoad: false},);

}

//get the genres of the movies
async function getGenresMoviesPreview () {
    

    const { data } = await api(`genre/movie/list`);
    const allGenres = data.genres;
    maxPages = data.total_pages
    //console.log(data);
    //console.log(allGenres);

    categoriesContainerSection.innerHTML = '';

    allGenres.forEach(genre => {
        

        const genreContainer = document.createElement('div');
        genreContainer.classList.add('category');

        const genreH3 = document.createElement('h3');
        genreH3.setAttribute('id', 'id' + genre.id);
        genreH3.addEventListener('click', () => {
            
           // console.log('contact');
            categoriesMoviesContainer.innerHTML = '';
            location.hash = `#category=${genre.id}-${genre.name}`;
        });
        
        genreH3.innerText = genre.name;

            genreContainer.appendChild(genreH3);
            categoriesContainerSection.appendChild(genreContainer);
            categoriesContainerSection.appendChild(moviesByCategory);
            categoriesContainerH3.appendChild(categoriesContainerSection);
            
    });
}

////get move movies on trend after  click the see more button on home page
async function getAllTrends () {
    const { data } = await api(`trending/movie/week`);
    const movies = data.results;
    maxPages = data.total_pages;
    //console.log(data);
   // console.log(movies);

    sectionTrendsContainer.innerHTML = '';

    trendsGenerator(movies, {lazyLoad: false},);


}


//get move movies on trend after  click the see more button on home page paginated
async function generateMoreMovies(){
    //sectionTrendsContainer.innerHTML = '';

    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    const isScrollDown = (clientHeight + scrollTop) >= (scrollHeight);
    const pageLimit = page < maxPages

   if (isScrollDown && pageLimit) {

    page++
    const { data } = await api(`trending/movie/week`,
    {
        params: {
            page,
        },
    });
        const movies = data.results;
        trendsGenerator(movies, {lazyLoad: false},);


   }


}

//get movies by genre
async function filterByGenre (id) {

    const { data } = await api('discover/movie', {
      params: {
        with_genres: id,
    
    },
    });
    const movies = data.results;
    maxPages = data.total_pages
    //console.log(data);
    //console.log(movies);
    moviesByCategory.innerHTML = '';
    
    movieDetailAside(movies, moviesByCategory, {lazyLoad: false},);


}
//get movies by genge with infinite scrolling
async function filterByGenreInfiniteScroll (id) {
    
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    const isScrollDown = (clientHeight + scrollTop) >= (scrollHeight - 100);
    const pageLimit = page < maxPages;

if (isScrollDown && pageLimit ) {
     page++
     const { data } = await api('discover/movie', 
     {
     params: {
         with_genres: id,
         page,
         
     },
     });
     const movies = data.results;
     //console.log(data);
     //console.log(movies);
    //  console.log('all');

     
     movieDetailAside(movies, moviesByCategory, {lazyLoad: false},);

     
}

}


//get movie by specific word
async function filterByValue (query) {
    const { data } = await api('search/movie', {
      params: {
        query,
    },
    });
    const movies = data.results;
    maxPages = data.total_pages;
    // console.log(data);
    // console.log(movies);
    // console.log('searching');

    moviesByCategory.innerHTML = '';
    movieDetailAside(movies, moviesByCategory, {lazyLoad: false},);

}
//get movies by  word paginated
async function paginatedResults (query) {
 
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    const isScrollDown = (clientHeight + scrollTop) >= (scrollHeight -100);
    const pageLimit = page < maxPages

if (isScrollDown && pageLimit ) {
     page++
     const { data } = await api('search/movie', {
        params: {
          query,
          page,
      },
      });
     const movies = data.results;
     //console.log(data);
     //console.log(movies);
     //console.log('filter');

     
     movieDetailAside(movies, moviesByCategory, {lazyLoad: false},);


}

}


function getFavoritesMovieList () {
const favoriteList = likedMoviesList();
const moviesArray = Object.values(favoriteList);

favoriteMoviesContainer.innerHTML = '';

movieDetailAside(moviesArray, favoriteMoviesContainer, {lazyLoad: false},)
//console.log(favoriteList)
}