import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByIdReviews } from 'services/eventApi';

export const useFetchEventReviews = () => {
  const [event, setEvent] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesByIdReviews(movieId).then(setEvent);
  }, [movieId]);

  return event;
};
