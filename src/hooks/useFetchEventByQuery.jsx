import { fetchMoviesByQuery } from 'services/eventApi';

export const useFetchEventQuery = () => {
  const [event, setEvent] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesByQuery(movieId).then(setEvent);
  }, [movieId]);

  return event;
};
