import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';


const Context = React.createContext();

function ContextProvider({ children }) {

    const { items, addMovie, removeMovie } = useLocalStorage('LikedMovies_V2');


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



