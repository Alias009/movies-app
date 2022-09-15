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
    console.log(movies);

    sectionTrendsContainer.innerHTML = '';

//////////////////////////////


    movies.forEach(movie => {
        

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movies-container')

        const movieImg = document.createElement('img');
        movieImg.classList.add('movies-container-img');
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movies-container-img-name');
        movieTitle.innerText = movie.title;

            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
            mainContainer.appendChild(movieContainer);


        //listener  for  every img that will show the details

        movieImg.addEventListener('click',function () {

            movieDetailContainer.innerHTML = '';
            movieDetailContainer.classList.remove('inactive');
            
            const containerCloseImg = document.createElement('div');
            containerCloseImg.classList.add('movie-detail-close');
            containerCloseImg.addEventListener('click',()=> {movieDetailContainer.classList.add('inactive')} );
               
            const imgClose = document.createElement('img');
            imgClose.classList.add('movie-detail-close-icon');
            imgClose.setAttribute('src', './styles/img/close_icon.png');
            //imgClose.addEventListener('click', homePage)

            containerCloseImg.appendChild(imgClose);
            
                
            const movieImgContainer = document.createElement('img');
            movieImgContainer.setAttribute('src',`https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
            
               
            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-info');
            const detailMoviename = document.createElement('p'); 
            const releaseDate = document.createElement('p');
            const overView = document.createElement('p');
            const SeeMoreButton = document.createElement('button');
            SeeMoreButton.classList.add('primary-button');
             
            detailMoviename.innerText = movie.original_title || movie.name; 
            releaseDate.innerText = `Rate: ${movie.vote_average}`;
            overView.innerText = movie.overview;
            SeeMoreButton.innerText = 'See more...';

            movieInfo.appendChild(detailMoviename); 
            movieInfo.appendChild(releaseDate); 
            movieInfo.appendChild(overView); 
            movieInfo.appendChild(SeeMoreButton); 


            movieDetailContainer.appendChild(containerCloseImg);
            movieDetailContainer.appendChild(movieImgContainer); 
            movieDetailContainer.appendChild(movieInfo);   
            sectionContainerOfDetailsAndTrends.appendChild(movieDetailContainer);   

            console.log('Details');
         })

    });


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getGenresMoviesPreview () {
    const { data } = await api(`genre/movie/list`);
    const allGenres = data.genres;

    console.log(data);
    console.log(allGenres);

    categoriesContainerSection.innerHTML = '';

    allGenres.forEach(genre => {
        

        const genreContainer = document.createElement('div');
        genreContainer.classList.add('category');

        const genreH3 = document.createElement('h3');
        genreH3.setAttribute('id', 'id' + genre.id);
        genreH3.addEventListener('click', () => {
            
            console.log('contact')
            //moviesByCategory.innerHTML = '';
            categoriesMoviesContainer.innerHTML = '';
            location.hash = `#category=${genre.id}-${genre.name}`;
        });
        
        genreH3.innerText = genre.name;

            genreContainer.appendChild(genreH3);
            categoriesContainerSection.appendChild(genreContainer);
           // categoriesContainerSection.appendChild(categoriesContainerTitle)
            categoriesContainerSection.appendChild(moviesByCategory);
            categoriesContainer.appendChild(categoriesContainerH3);
            categoriesContainer.appendChild(categoriesContainerSection);


            
    });
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

    
    

//////////////////////////////


 moviesByCategory.innerHTML = '';

    movies.forEach(movie => {
        
        
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movies-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movies-container-img');
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movies-container-img-name');
        movieTitle.innerText = movie.title;

            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
            moviesByCategory.appendChild(movieContainer);

            
            //categoriesContainerTitle.appendChild(categoriesTitle)
            categoriesMoviesContainer.appendChild(moviesByCategory);
            categoriesMoviesContainer.appendChild(categoriesContainerTitle);
            categoriesContainer.appendChild(categoriesMoviesContainer);




        //listener  for  every img that will show the details

        movieImg.addEventListener('click',function(){

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
            const SeeMoreButton = document.createElement('button');
            SeeMoreButton.classList.add('primary-button');
             
            detailMoviename.innerText = movie.original_title || movie.name;
            releaseDate.innerText = `Rate: ${movie.vote_average}`;
            overView.innerText = movie.overview;
            SeeMoreButton.innerText = 'See more...';

            movieInfo.appendChild(detailMoviename);
            movieInfo.appendChild(releaseDate);
            movieInfo.appendChild(overView);
            movieInfo.appendChild(SeeMoreButton);


            movieDetailContainer.appendChild(containerCloseImg);
            movieDetailContainer.appendChild(movieImgContainer);
            movieDetailContainer.appendChild(movieInfo);

            console.log('Details by genre');
            
            
            

            
            
    });

    });


}


async function getAllTrends () {
    const { data } = await api(`trending/all/week`);
    const movies = data.results;
    console.log(data);
    console.log(movies);

    sectionTrendsContainer.innerHTML = '';

//////////////////////////////


    movies.forEach(movie => {
        

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movies-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movies-container-img');
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        const movieTitle = document.createElement('span');
        movieTitle.classList.add('movies-container-img-name');
        movieTitle.innerText = movie.title || movie.name;

            movieContainer.appendChild(movieImg);
            movieContainer.appendChild(movieTitle);
            mainContainer.appendChild(movieContainer);


        //listener  for  every img that will show the details

        movieImg.addEventListener('click',function () {

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
            const type = document.createElement('p'); 
            const overView = document.createElement('p');
            const SeeMoreButton = document.createElement('button');
            SeeMoreButton.classList.add('primary-button');
             
            detailMoviename.innerText = movie.original_title || movie.name;
            type.innerText = movie.media_type;
            overView.innerText = movie.overview;
            SeeMoreButton.innerText = 'See more...';

            movieInfo.appendChild(detailMoviename); 
            movieInfo.appendChild(type);
            movieInfo.appendChild(overView); 
            movieInfo.appendChild(SeeMoreButton); 


            movieDetailContainer.appendChild(containerCloseImg);
            movieDetailContainer.appendChild(movieImgContainer);
            movieDetailContainer.appendChild(movieInfo)    
            sectionContainerOfDetailsAndTrends.appendChild(movieDetailContainer);    

            console.log('Details');
         })

    });


}
/////////
function movieDetailAside (movies,container) {
    
    container.innerHTML = ''
            
    container.classList.remove('inactive')
            
            const containerCloseImg = document.createElement('div')

            containerCloseImg.classList.add('movie-detail-close')
            containerCloseImg.addEventListener('click',()=> {movieDetailContainer.classList.add('inactive')} )
               
            const imgClose = document.createElement('img')
            imgClose.classList.add('movie-detail-close-icon')  
            imgClose.setAttribute('src', './styles/img/close_icon.png')
            
            containerCloseImg.appendChild(imgClose)
            
                
            const movieImgContainer = document.createElement('img') 
            movieImgContainer.setAttribute('src',`https://image.tmdb.org/t/p/w300/${movies.poster_path}`)
            
               
            const movieInfo = document.createElement('div') 
            movieInfo.classList.add('movie-info') 
            const detailMoviename = document.createElement('p') 
            const releaseDate = document.createElement('p') 
            const overView = document.createElement('p')
            const SeeMoreButton = document.createElement('button')
            SeeMoreButton.classList.add('primary-button')
             
            detailMoviename.innerText = movies.original_title || movie.name
            releaseDate.innerText = movies.vote_average
            overView.innerText = movies.overview 
            SeeMoreButton.innerText = 'See more...'

            movieInfo.appendChild(detailMoviename) 
            movieInfo.appendChild(releaseDate) 
            movieInfo.appendChild(overView) 
            movieInfo.appendChild(SeeMoreButton) 


            container.appendChild(containerCloseImg) 
            container.appendChild(movieImgContainer) 
            container.appendChild(movieInfo)    

            console.log('Details by genre')
}