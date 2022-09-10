window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

movieDetailContainerCloseImg.addEventListener('click', () => {
    movieDetailContainer.classList.add('inactive')
    //cambiar por funcion movieDetailPage()
});

headerLeftLogo.addEventListener('click', homePage);

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
    location.hash
}



function homePage ()
 {
    trendingContainerTitleButton.classList.remove('inactive')
    sectionTrendsContainer.classList.remove('inactive')
    categoriesContainerH2.classList.remove('inactive');
    categoriesMoviesContainer.classList.add('inactive');
    movieDetailContainer.classList.add('inactive');
    console.log('Home!!');

    getTrendingMoviesPreview();
    getGenresMoviesPreview();

}
 
 
 function trendPage ()
 {
    sectionTrendsContainer.classList.remove('inactive');
    trendingContainerTitleButton.classList.remove('inactive')
    categoriesContainerH2.classList.add('inactive');
    categoriesMoviesContainer.classList.add('inactive');
    console.log('Trends!!');
 }
 
 
 function searchPage ()
 {
    categoriesMoviesContainer.classList.remove('inactive');
    sectionTrendsContainer.classList.add('inactive');
    categoriesContainerH2.classList.add('inactive')
    console.log('Search!!');
 }
 
 function movieDetailPage () {
    movieDetailContainer.classList.remove('inactive')
    console.log('Movie!!');
 } 
 
 function genresPage ()
 {
    categoriesContainerH2.classList.remove('inactive')
    trendingContainerTitleButton.classList.add('inactive')
    sectionTrendsContainer.classList.add('inactive')
    categoriesMoviesContainer.classList.add('inactive')
    console.log('Genres!!')
 }