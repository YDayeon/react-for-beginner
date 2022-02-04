// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import About from '../components/About';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    console.log(details);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        <About
          bgImg={details.background_image}
          coverImg={details.medium_cover_image}
          title={details.title_long}
          rating={details.rating}
          genres={details.genres.join(' | ')}
          runtime={details.runtime}
          description={details.description_full}
        />
      )}
    </div>
  );
}
export default Detail;
