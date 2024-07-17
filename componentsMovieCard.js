import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 200px;
`;

export default MovieCard;
