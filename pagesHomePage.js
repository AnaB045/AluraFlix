import React from 'react';
import { useMovies } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';

const HomePage = () => {
  const { movies } = useMovies();

  return (
    <Container>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default HomePage;
