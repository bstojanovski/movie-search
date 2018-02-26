/*
 * MovieDetails
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectMovies, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import Section from './Section';
import { loadSingleMovie } from '../App/actions';
import { changeImdb } from './actions';
import { makeSelectImdb } from './selectors';
import reducer from './reducer';
import saga from '../App/saga';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // Get imdb from query string
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const imdb = params.get('imdb');

    this.props.loadImdb(imdb);
  }

  render() {
    const { loading, error, movie } = this.props;
    const moviesListProps = {
      loading,
      error,
      movie,
    };

    return (
      <div>
        <Section className="container">
          <div className="col-sm-4 col-md-4">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="col-sm-6 col-md-8">
            <h1>{movie.Title}</h1>
            <h4>{movie.Year}</h4>
            <h5>Genre: {movie.Genre}</h5>
            <p>Rating: {movie.imdbRating} / 10</p>
            <p>{movie.Plot}</p>
            <a href={`http://www.imdb.com/title/${movie.imdbID}`} target="_blank"><button className="btn btn-info">View on IMDB</button></a>
          </div>
        </Section>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  imdb: PropTypes.string,
  movie: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    loadImdb: (imdb) => {
      dispatch(changeImdb(imdb));
      if(imdb != '') {
        dispatch(loadSingleMovie());
      }
    }
  };
}

const mapStateToProps = createStructuredSelector({
  movie: makeSelectMovies(),
  imdb: makeSelectImdb(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
