import React, { useState } from 'react';
// import { useState } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';


const Context = React.createContext();

function ContextProvider({ children }) {
    // const [likedMovie, setLikedMovie] = useState(false);
    const { items, addMovie, removeMovie } = useLocalStorage('LikedMovies_V2');
    // const { iLikeMovie, likedMoviesList, getFavoritesMovieList } = useLocalStorage2('LikedMovies_V3');

    // const lazyLoading = () => {}
    const isOnFavorites = (movieId) => {
        return Array.isArray(items) && items.some((item) => item.id === movieId);
    }

    
    return(
        <Context.Provider value={{ favorites: items, addMovie, removeMovie, isOnFavorites }}>
            {children}
        </Context.Provider>
    );
}
function useStorage() {
const auth = React.useContext(Context);
return auth;
}

export {
    ContextProvider,
    useStorage,
}



