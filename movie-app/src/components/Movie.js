import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <Link_Container
      to={{
        pathname: `/movie/id=${id}`,
        state: { url, year, title, summary, poster, genres },
      }}
    >
      <Movies>
        <Movie_img src={poster} alt={title} title={title} />
        <Info>
          <Movie_title>{title}</Movie_title>
          <Movie_year>{year}</Movie_year>
          <Movie_genres>
            {genres.map((genre, index) => (
              <Genres_genre key={index}>{genre}</Genres_genre>
            ))}
          </Movie_genres>
          <p>{summary}</p>
        </Info>
      </Movies>
    </Link_Container>
  );
}

const Link_Container = styled(Link)`
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

const Movies = styled.div`
  height: 260px;
  background-color: white;
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-weight: 300;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Info = styled.div`
  display: flex;
  margin-left: 10px;
  padding: 10px;
  flex-direction: column;
`;

const Movie_img = styled.img`
  max-height: 260px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const Movie_title = styled.h3`
  margin: 0;
  font-weight: 300;
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
`;

const Movie_year = styled.h5`
  margin: 0;
  font-weight: 300;
  margin-right: 10px;
  font-size: 14px;
`;

const Movie_genres = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 5px 0px;
`;

const Genres_genre = styled.li`
  margin-right: 10px;
  font-size: 14px;
`;

export default Movie;
