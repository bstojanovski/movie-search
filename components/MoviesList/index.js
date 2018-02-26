import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import MovieItem from 'components/MovieItem';
import Error from 'components/Error';

function MoviesList({ loading, error, movies }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <MovieItem item={'Something went wrong.'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (movies.Response == "False") {
    return <Error item={movies} />;
  }

  if (movies.Response == "True") {
    return (
      <List items={movies.Search} component={MovieItem} />
    );
  }

  return null;
}

MoviesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  movies: PropTypes.any,
};

export default MoviesList;
