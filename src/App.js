import { HashRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/useContext';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import { MoviesByGenres } from './pages/Genres/MoviesByGenres'
import { AllMovies } from './pages/AllMovies/AllMovies';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { SeachResults } from './pages/Search/Search';
import { Favorites } from './pages/Favorites/Favorites';
import { NotFound } from './pages/NotFound/NotFound';
import './App.css';



function App() {
  return (
    
  <>
  <HashRouter>
   <ContextProvider>
   <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/all-movies' element={<AllMovies/>}/>
      <Route path='/genres' element={<MoviesByGenres/>}/>
      <Route path='/genres/:id' element={<MoviesByGenres/>}/>
      <Route path='/details/:movie' element={<MovieDetails/>}/>
      <Route path='/search/:query' element={<SeachResults/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
   </ContextProvider>
  </HashRouter>
    
  </>
  );
}

export default App;
