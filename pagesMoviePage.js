import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../contexts/MovieContext';
import styled from 'styled-components';

const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useMovies();
  const movie = movies.find(movie => movie.id === parseInt(id));

  return (
    <Container>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default MoviePage;
