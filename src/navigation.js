seeMoreButton.addEventListener('click', () => {
    location.hash = '#trends='
})

headerRightButton.addEventListener('click', () => {
    if(headerRightInput.value != '') {
        location.hash ='#category='
    } 
})


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

headerLeftLogo.addEventListener('click', ()=> {
    location.hash = ''
});



function navigator () {
     console.log({ location })
    
    if(location.hash.startsWith('#trends')) {

        trendPage()

    } else if (location.hash.startsWith('#search=')) {
        
        searchPage()

    } else if (location.hash.startsWith('#movie=')) {

        movieDetailPage()
    
    } else if (location.hash.startsWith('#category=')) {

        genresPage()

    } else {

        homePage()
    }

    window.scrollTo(0, 0)

}



function homePage ()
 {
    trendingContainerTitleButton.classList.remove('inactive')
    sectionTrendsContainer.classList.remove('inactive')
    categoriesCOntainerH1.classList.remove('inactive')
    categoriesContainerH3.classList.remove('inactive')
   // categoriesContainerTitle.classList.add('inactive')
    categoriesMoviesContainer.classList.add('inactive')
    movieDetailContainer.classList.add('inactive')
    moviesByCategory.classList.add('inactive')

    trendsCategoriesH1.innerText = 'GENRES'
    console.log('Home!!');

    getTrendingMoviesPreview();
    getGenresMoviesPreview();

}
 
 
 function trendPage ()
 {
    sectionTrendsContainer.classList.remove('inactive')
    categoriesMoviesContainer.classList.add('inactive')
    trendTitleH1.innerText = '' || 'ALL TRENDS'
    getAllTrends()
    //getGenresMoviesPreview()
    console.log('Trends!!');
 }
 
 
 function searchPage ()
 {
    categoriesMoviesContainer.classList.remove('inactive');
    sectionTrendsContainer.classList.add('inactive');
    categoriesContainerH3.classList.add('inactive')
    console.log('Search!!');
 }
 
 function movieDetailPage () {
    movieDetailContainer.classList.remove('inactive')
    console.log('Movie!!');
 } 
 
 function genresPage ()
 {
    trendingContainerTitleButton.classList.add('inactive')
    sectionTrendsContainer.classList.add('inactive')
    movieDetailContainer.classList.add('inactive')

    //categoriesContainerTitle.classList.add('inactive')
    categoriesMoviesContainer.classList.remove('inactive')
    moviesByCategory.classList.remove('inactive')
    categoriesContainerH3.classList.remove('inactive')

    

    const [_,categoryData] = location.hash.split('=');
    const [categoryID, categoryNAME] = categoryData.split('-')
    
    trendsCategoriesH1.innerText = '' || categoryNAME || headerRightInput.value
    
    getGenresMoviesPreview();
    filterByGenre(categoryID)
    console.log('Genres!!')
 }
