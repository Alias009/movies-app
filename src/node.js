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

/* movie deatil container */
const movieDetailContainer =document.querySelector('.movie-detail');//add inactive when home 
const movieDetailContainerCloseImgContainer =document.querySelector('.movie-detail-close');
const movieDetailContainerCloseImg =document.querySelector('.close-img');//add event listener to add inactive when click

const movieDetailContainerButton =document.querySelector('.see-more-button');

/* main container */
const mainContainer = document.querySelector('#main-container');
const sectionTrendsContainer = document.querySelector('#section-main-container');//add inactive when changes to category
const categoriesContainer = document.querySelector('#aside');//genreMainCntainer in main.js
const categoriesMoviesContainer = document.querySelector('.categories-movies-container');//add inactive
const categoriesContainerTitle = document.querySelector('#categories-container-title');