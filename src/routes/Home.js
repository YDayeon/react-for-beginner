import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import style from './Home.module.css';
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={style.grid_container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <span className={style.logo} href='#'>
            Movie
          </span>
          <div className={style.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                runtime={movie.runtime}
                rating={movie.rating}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
