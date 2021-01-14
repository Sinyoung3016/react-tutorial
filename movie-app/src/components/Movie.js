import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Movie({ id, url, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <a href={url}>
        <img src={poster} alt={title} title={title} />
      </a>
      <div className="info">
        <Link
          to={{
            pathname: `/movie/id=${id}`,
            state: { year, title, summary, poster, genres },
          }}
        >
          <h3 className="movie_title">{title}</h3>
        </Link>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li className="genres_genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

export default Movie;
