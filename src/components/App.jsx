import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { SearchPage } from 'pages/SearchPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { CastPage } from 'pages/CastPage';
import { ReviewsPage } from 'pages/ReviewsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="watched" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};
