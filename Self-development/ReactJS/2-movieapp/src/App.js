import React, {useEffect, useState} from 'react'
import Movie from './components/Movie';

const FEATURED_API = 'https://api.themoviedb.org/3/movie/popular?api_key=e22b3f0622c0092d0d816c8c05ad0afc&language=en-US&page=1';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=e22b3f0622c0092d0d816c8c05ad0afc&query=';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
      getMovies(FEATURED_API)
    }, [])
 
    const getMovies = (API) => {
      fetch(API)
      .then(res => res.json())
      .then(data => {
  
        console.log(data);
        setMovies(data.results);
      });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(searchTerm) {
          getMovies(SEARCH_API+searchTerm)
          setSearchTerm('');
      }
    };

    const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
    }

    return (<>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search" 
            type="search" 
            placeholder="Leta efter..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        
      </header> 
      <div className="movie-container">

      {movies.length > 0 && movies.map((movie) => 
      <Movie key={movie.id} {...movie} />)}
      
      </div>
      </>
    )
  }

export default App;
