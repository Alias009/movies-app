/* header */
/* navbar left */
const headerLeft = document.querySelector('#header-left');
const headerLeftLogo = document.querySelector('#logo');//add evenlistener to return home page


/* navbar right */
const headerRight = document.querySelector('#header-right');
const headerRightForm = document.querySelector('#header-search-form');
const headerRightInput = document.querySelector('#header-search-input');
const headerRightButton = document.querySelector('#header-search-button');
const headerRightIMG = document.querySelector('#header-search-img');

/* movie detail container */
const movieDetailContainer = document.querySelector('.movie-detail');//add inactive 
const movieDetailContainerButton =document.querySelector('.see-more-button');

/* main container */
const mainContainer = document.querySelector('#main-container #section-main-container');
const sectionContainerOfDetailsAndTrends = document.querySelector('.section-container');
const trendTitleH1 = document.getElementById('section-container-title');
const seeMoreButton = document.getElementById('section-container-button');
const sectionTrendsContainer = document.querySelector('.section-main-container');//add inactive when changes to category
const moviesContainer = document.querySelector('.movies-container');
const trendingContainerTitleButton = document.querySelector('.section-container-title-button');//add inactive

const categoriesContainer = document.querySelector('#categories-main' );//genreMainCntainer in main.js
const categoriesContainerH3 = document.querySelector('.categories-container-h3');//add inactive
const categoriesCOntainerH1 = document.querySelector('.genres-container-title');//remove inactive  in home page
const trendsCategoriesH1 = document.getElementById('genres-title');// title will change when categories
const categoriesContainerSection = document.querySelector('.categories-container-section');
const categories = document.querySelector('.category');

const categoriesMoviesContainer = document.querySelector('.categories-movies-container');//add inactive
const categoriesContainerTitle = document.querySelector('.categories-container-title');
const categoriesTitle = document.querySelector('.categories-title');
const moviesByCategory = document.querySelector('.movies-by-trends-container-img');
const favoriteMovies = document.querySelector('.favorite-movies');
const favoriteMoviesContainer = document.querySelector('.favorite-movies-container');