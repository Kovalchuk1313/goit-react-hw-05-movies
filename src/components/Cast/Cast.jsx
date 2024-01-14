import { Loader } from 'components/Loader/Loader';
import { List, Item } from 'components/MoviesList/MoviesList.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, fetchError } from 'api/api';

const endPoint = '/movie';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(fetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <h3>Cast:</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <b>{name}</b>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png'
                }
                alt={name}
                width="100"
                height="150"
              />
            </Item>
          ))}
        </List>
      ) : (
        <p>Sorry! We don't have any information about cast</p>
      )}
    </>
  );
};

export default Cast;
