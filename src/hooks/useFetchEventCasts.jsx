import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByIdCast } from 'services/eventApi';

export const useFetchEventCast = () => {
  const [event, setEvent] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesByIdCast(movieId).then(setEvent);
  }, [movieId]);

  return event;
};
