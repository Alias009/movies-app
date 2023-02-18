import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { MoviesByGenres } from './pages/Genres/MoviesByGenres'
import { AllMovies } from './pages/AllMovies/AllMovies';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { SeachResults } from './Search/Search';



function App() {
  return (
    
  <>
  <HashRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/all-movies' element={<AllMovies/>}/>
      <Route path='/genres' element={<MoviesByGenres/>}/>
      <Route path='/genres/:id' element={<MoviesByGenres/>}/>
      {/* <Route path='/details' element={<MovieDetails/>}/> */}
      <Route path='/details/:movie' element={<MovieDetails/>}/>
      <Route path='/search/:query' element={<SeachResults/>}/>
    </Routes>
  </HashRouter>
    
  </>
  );
}

export default App;
