import propTypes from 'prop-types';

function About({
  bgImg,
  coverImg,
  title,
  rating,
  genres,
  runtime,
  description,
}) {
  return (
    <div>
      <img src={bgImg}></img>
      <img src={coverImg}></img>
      <h1>{title}</h1>
      <h4>
        {runtime}min | ⭐{rating}
      </h4>
      <h3>{genres}</h3>
      <p>{description}</p>
    </div>
  );
}

export default About;
