import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies, fetchError, styleNotify } from 'api/api';
import { SectionMain } from './Movies.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Search/Search';

const endPoint = '/search/movie';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    if (films.length > 0) {
      return;
    }

    setLoading(true);
    fetchSearchMovies(endPoint, searchQuery)
      .then(data => {
        setFilms(data.results);
      })
      .catch(fetchError)
      .finally(() => setLoading(false));
  }, [films, searchQuery]);

  const onSubmitSearchBar = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.search.value.trim().toLowerCase();

    if (searchValue === '') {
      Notify.info('Enter your request, please!', styleNotify);
      setSearchParams({});
      setFilms([]);
      return;
    }

    if (searchValue === searchQuery) {
      Notify.info('Enter new request, please!', styleNotify);
      return;
    }

    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return (
    <div>
      <Searchbar onSubmitSearchBar={onSubmitSearchBar} value={searchQuery} />
      <SectionMain>
        {loading && <Loader />}
        <MoviesList films={films} />
      </SectionMain>
    </div>
  );
};

export default Movies;
