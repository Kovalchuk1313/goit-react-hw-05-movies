import { Link, useLocation } from 'react-router-dom';
import { List, Item, WrapperCard } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(({ id, title, overview, poster_path }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <Item key={id}>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
              }
              alt={title}
              width="154"
              height="231"
            />
            <WrapperCard>
              <h3>{title}</h3>
              <p>{overview}</p>
            </WrapperCard>
          </Item>
        </Link>
      ))}
    </List>
  );
};

export default MoviesList;
