seeMoreButton.addEventListener('click', () => {
    location.hash = '#trends='
})

headerRightButton.addEventListener('click', () => {
    location.hash ='#search=' + headerRightInput.value
    
}, false)


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

headerLeftLogo.addEventListener('click', ()=> {
    location.hash = ''
});



function navigator () {
     console.log({ location })
    
    if(location.hash.startsWith('#trends=')) {

        trendPage()

    } else if (location.hash.startsWith('#search=')) {
        
        searchPage()

    }  else if (location.hash.startsWith('#category=')) {

        genresPage()

    } else  {

        homePage()
    }

    window.scrollTo(0, 0)

}



function homePage ()
 {
    trendingContainerTitleButton.classList.remove('inactive')
    seeMoreButton.classList.remove('inactive')
    sectionTrendsContainer.classList.remove('inactive')
    categoriesCOntainerH1.classList.remove('inactive')
    categoriesContainerH3.classList.remove('inactive')
    categoriesContainerSection.classList.remove('inactive')
    categoriesMoviesContainer.classList.add('inactive')
    movieDetailContainer.classList.add('inactive')
    moviesByCategory.classList.add('inactive')

    trendTitleH1.innerText = 'Trending movies'
    trendsCategoriesH1.innerText = 'GENRES'


    console.log('Home!!');
    
    getTrendingMoviesPreview();
    getGenresMoviesPreview();

}
 
 
 function trendPage ()
 {
    sectionTrendsContainer.classList.remove('inactive')
    categoriesMoviesContainer.classList.add('inactive')
    trendTitleH1.innerText = '' || 'ALL TRENDS';


    getAllTrends()
    //console.log('Trends!!');
 }
 
 
 function searchPage ()
 {
    
    categoriesContainerTitle.classList.add('inactive')
    categoriesContainerH3.classList.add('inactive')
    seeMoreButton.classList.add('inactive')
    categoriesContainerSection.classList.add('inactive')

    // ['#search=', 'value']
    const [_,query] = location.hash.split('=');

    
    trendTitleH1.innerText = '' ||  'Results of ' + headerRightInput.value
    
    
    filterByValue(query);

   // console.log('Search!!');
 }
 
 
 function genresPage ()
 {
    trendingContainerTitleButton.classList.add('inactive')
    sectionTrendsContainer.classList.add('inactive')
    movieDetailContainer.classList.add('inactive')

    
    categoriesMoviesContainer.classList.remove('inactive')
    moviesByCategory.classList.remove('inactive')
    categoriesContainerH3.classList.remove('inactive')

    
    // ['#search=', 'value']
    const [_,categoryData] = location.hash.split('=');
    const [categoryID, categoryNAME] = categoryData.split('-')
    
    trendsCategoriesH1.innerText = '' || categoryNAME || headerRightInput.value
    
    getGenresMoviesPreview();
    filterByGenre(categoryID);
    //console.log('Genres!!')
 }
