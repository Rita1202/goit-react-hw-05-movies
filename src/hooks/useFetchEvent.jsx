import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/eventApi';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesById(movieId).then(setEvent);
  }, [movieId]);
  return event;
};
