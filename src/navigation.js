window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

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
    categoriesMoviesContainer.classList.add('inactive')
    console.log('Home!!')

    getTrendingMoviesPreview()
    getGenresMoviesPreview()

}
 
 
 function trendPage ()
 {
    categoriesContainer.classList.add('.inactive')
    categoriesMoviesContainer.classList.add('.inactive')
    console.log('Trends!!')
 }
 
 
 function searchPage ()
 {
    sectionTrendsContainer.classList.add('.inactive')
    console.log('Search!!')
 }
 
 function movieDetailPage () {
    movieDetailContainer.classList.remove('.inactive')
    console.log('Movie!!')
 } 
 
 function genresPage ()
 {
    sectionTrendsContainer.classList.add('.inactive')
    console.log('Genres!!')
 }