import axios from 'axios';

const KEY = '83e3be58eb1d2a6b48eeeebd934744c4';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day?';

export async function fetchTrendMovies(page) {
  const responce = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?',
    {
      params: {
        api_key: KEY,
        page,
      },
    }
  );
  return responce.data.results;
}

export async function fetchMoviesById(id) {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`
  );
  return responce.data;
}

export async function fetchMoviesByIdCast(id) {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`
  );
  return responce.data;
}

export async function fetchMoviesByIdReviews(id) {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`
  );
  return responce.data;
}

export async function fetchMoviesByQuery(query, page) {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/search/movie?`,
    {
      params: {
        api_key: KEY,
        query,
        page,
      },
    }
  );

  return responce.data.results;
}

// fetchMoviesByQuery('star').then(res => console.log(res));

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=start&page=1
