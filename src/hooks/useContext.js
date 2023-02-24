import React from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';

const Context = React.createContext();

function ContextProvider({ children }) {

   const APP_URL = process.env.REACT_APP_URL;
   const APP_KEY = process.env.REACT_APP_API_KEY;

    const navigate = useNavigate();
    const location = useLocation()
    const [pagination, setPagination] = React.useState();

    const lazyLoading = () => {
        let maxPages = 20;
        let page = 1
         let infiniteScroll;
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
         const isScrollDown = (clientHeight + scrollTop) >= (scrollHeight -100);
         const pageLimit = page < maxPages
     
     if (isScrollDown && pageLimit ) {
    setPagination(page++)
    console.log('Lazyy')
     }
    
     }
    

    const auth = {navigate, location, APP_URL, APP_KEY};
    return(
        <Context.Provider value={auth}>
            {children}
        </Context.Provider>
    );
}
function useAuth() {
const auth = React.useContext(Context);
return auth;
}

export {
    ContextProvider,
    useAuth,
}



