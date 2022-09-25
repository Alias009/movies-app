let maxPages;
let page = 1;
let infiniteScroll;

seeMoreButton.addEventListener('click', () => {
    location.hash = '#trends=';
    
    mainContainer.classList.toggle('section-main-container')
    seeMoreButton.classList.add('inactive');
});

headerRightButton.addEventListener('click', () => {
    location.hash ='#search=' + headerRightInput.value
    
}, false);

headerLeftLogo.addEventListener('click', ()=> {
    location.hash = ''
    mainContainer.classList.toggle('section-main-container')
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
window.addEventListener('scroll', infiniteScroll, false);





function navigator () {
    console.log({ location })

 if (infiniteScroll) {
    window.removeEventListener('scroll',infiniteScroll,{ passive: false });
    infiniteScroll = undefined;
 }
    
     
    
    if(location.hash.startsWith('#trends=')) {

        trendPage();

    } else if (location.hash.startsWith('#search=')) {
        
        searchPage();

    }  else if (location.hash.startsWith('#category=')) {

        genresPage();

    } else  {

        homePage();
    }

    window.scrollTo(0, 0);

    if (infiniteScroll) {
        window.addEventListener('scroll',infiniteScroll, { passive: false });
        
     }

}



function homePage ()
 {
    trendingContainerTitleButton.classList.remove('inactive');
    seeMoreButton.classList.remove('inactive');
    sectionTrendsContainer.classList.remove('inactive');
    categoriesCOntainerH1.classList.remove('inactive');
    categoriesContainerH3.classList.remove('inactive');
    categoriesContainerSection.classList.remove('inactive');
    categoriesMoviesContainer.classList.remove('inactive');
    favoriteMovies.classList.remove('inactive');
    movieDetailContainer.classList.add('inactive');
    moviesByCategory.classList.add('inactive');

    trendTitleH1.innerText = 'Trending movies';

    //console.log('Home!!');
    
    getTrendingMoviesPreview();
    getGenresMoviesPreview();
    getFavoritesMovieList();

}
 
 
 function trendPage ()
 {
    
    sectionTrendsContainer.classList.remove('inactive');
    categoriesCOntainerH1.classList.add('inactive');
    categoriesContainer.classList.add('inactive');
    categoriesContainerSection.classList.add('inactive');
    categoriesMoviesContainer.classList.add('inactive');
    favoriteMovies.classList.add('inactive');
    trendTitleH1.innerText = '' || 'ALL TRENDS';
    
    getAllTrends();
     
    infiniteScroll = generateMoreMovies;
    //console.log('Trends!!');
 }
 
 
 function searchPage ()
 {
    
    categoriesContainerTitle.classList.add('inactive');
    categoriesContainerH3.classList.add('inactive');
    seeMoreButton.classList.add('inactive');
    categoriesContainerSection.classList.add('inactive');
    favoriteMovies.classList.add('inactive');

    // ['#search=', 'value']
    const [_,query] = location.hash.split('=');

    
    trendTitleH1.innerText = '' ||  'Results of ' + headerRightInput.value;
    
    sectionTrendsContainer.innerHTML = '';
    filterByValue(query);
    infiniteScroll= () => {paginatedResults(query)}
   // console.log('Search!!');
 }
 
 
 function genresPage ()
 {
    trendingContainerTitleButton.classList.add('inactive');
    sectionTrendsContainer.classList.add('inactive');
    movieDetailContainer.classList.add('inactive');
    sectionContainerOfDetailsAndTrends.classList.add('inactive');

    favoriteMovies.classList.add('inactive');
    categoriesMoviesContainer.classList.remove('inactive');
    moviesByCategory.classList.remove('inactive');
    categoriesContainerH3.classList.remove('inactive');

    
    // ['#search=', 'value']

    const [_,categoryData] = location.hash.split('=');
    const [categoryID, categoryNAME] = categoryData.split('-');
    
    trendsCategoriesH1.innerText = '' || categoryNAME;
    
    getGenresMoviesPreview();
    filterByGenre(categoryID);
    //moviesByCategory.innerHTML = '';
    //restart page so every time you change genre pagination starts from 1
    page = 1
    infiniteScroll = () => {
    filterByGenreInfiniteScroll(categoryID);
} 
    console.log('Genres!!');
    //console.log(page);
 }
