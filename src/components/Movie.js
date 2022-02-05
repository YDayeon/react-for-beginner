import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({ medium_cover_image, title, id, runtime, rating, genres }) {
  return (
    <div className={styles.movies}>
      <Link to={`/movie/${id}`}>
        <img className={styles.img} src={medium_cover_image} alt={title}></img>
      </Link>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.runtime_rating}>
        <span>{runtime}min </span>
        <span>| ⭐{rating}</span>
      </div>
      <ul className={styles.genre}>
        {genres && genres.map((g) => <span key={g}>{g} </span>)}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Movie;
