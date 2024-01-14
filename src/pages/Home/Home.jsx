import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchMovies, fetchError } from 'api/api';
import { SectionMain } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const endPoint = '/trending/movie/day';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchMovies(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(fetchError)
      .finally(() => setLoading(false));
  }, [films]);

  return (
    <SectionMain>
      <h2>Trending today</h2>
      {loading && <Loader />}
      <MoviesList films={films} />
    </SectionMain>
  );
};

export default Home;
