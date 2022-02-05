import propTypes from 'prop-types';
import style from './About.module.css';
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
      <img className={style.bgImg} src={bgImg}></img>
      <img className={style.coverImg} src={coverImg}></img>
      <div className={style.text_container}>
        <h1 className={style.title}>{title}</h1>
        <h4>
          {runtime}min | ⭐{rating}
        </h4>
        <h4>{genres}</h4>
        <div className={style.container}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
