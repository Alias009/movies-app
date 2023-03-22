import { useState, useEffect } from "react";

export function useLocalStorage(key) {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem(key))|| []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(items));
    }, [items]);
    const addMovie = (item) => {
        const id = items.length + 1;
        setItems([...items, { ...item }]);
    }
    
     function removeMovie (id) {
        //movie.id
    const filteredMovies = items.filter((item) => item.id !== id);
    setItems(filteredMovies);
    }
    
   return { items, addMovie, removeMovie };
}
function newMovieId() {
    return Date.now();
}




export function useLocalStorage2(key) {
    const item = JSON.parse(localStorage.getItem(key));
    function likedMoviesList () {
        let movies;
    
        if (item) {
            movies = item;
        } else {
            movies = {};
        }
        return movies;
    }
    
    function iLikeMovie (movie) {
        //movie.id
    const likedMovies = likedMoviesList();
    
    if (likedMovies[movie.id]) {
        //if the movie is saved then delete
        likedMovies[movie.id] = undefined;
    } else {
        //if the movie is not saved then save the complete object
        likedMovies[movie.id] = movie;
    }
        localStorage.setItem('LikedMovies_V3', JSON.stringify(likedMovies));
    
    
        //  getFavoritesMovieList();
    }
    function getFavoritesMovieList () {
        const favoriteList = likedMoviesList();
        const moviesArray = Object.values(favoriteList);
        
        return { data: moviesArray}
        }

        return { iLikeMovie, likedMoviesList, getFavoritesMovieList }
}




function likedMoviesList (key) {
    const item = JSON.parse(localStorage.getItem(key));
    let movies;

    if (item) {
        movies = item;
    } else {
        movies = {};
    }
    return movies;
}

function likeMovie (movie, key) {
    //movie.id
const likedMovies = likedMoviesList(key);

if (likedMovies[movie.id]) {
    //if the movie is saved then delete
    likedMovies[movie.id] = undefined;
} else {
    //if the movie is not saved then save the complete object
    likedMovies[movie.id] = movie;
}
    localStorage.setItem(key, JSON.stringify(likedMovies));


    // getFavoritesMovieList();
}
function getFavoritesMovieList () {
    const favoriteList = likedMoviesList();
    const moviesArray = Object.values(favoriteList);
    
    return { data: moviesArray}
    }