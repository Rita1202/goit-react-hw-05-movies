import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/eventApi';

export const useFetchEventQuery = () => {
  const [event, setEvent] = useState(null);
  const { movieId } = useParams();
  console.log(event);

  useEffect(() => {
    fetchMoviesByQuery(movieId).then(res => {
      console.log(res);
      setEvent(res);
    });
  }, [movieId]);

  return event;
};
