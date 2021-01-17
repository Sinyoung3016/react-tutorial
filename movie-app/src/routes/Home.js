import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import styled from "styled-components";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span>Loading</span>
          </div>
        ) : (
          <Movies_Container>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                url={movie.url}
                year={movie.year}
                title={movie.title}
                summary={movie.summary.slice(0, 140) + "..."}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </Movies_Container>
        )}
      </section>
    );
  }
}

const Movies_Container = styled.div`
  display: grid;
  box-sizing: border-box;
  padding: 50px;
  width: 100%;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Home;
