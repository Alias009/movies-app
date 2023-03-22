import { useState, useEffect } from "react";

export function useLocalStorage(key) {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem(key))|| []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(items));
    }, [items]);
    const addMovie = (item) => {
        
        setItems([...items, { ...item }]);
    }
    
     function removeMovie (id) {
        //movie.id
    const filteredMovies = items.filter((item) => item.id !== id);
    setItems(filteredMovies);
    }
    
   return { items, addMovie, removeMovie };
}


