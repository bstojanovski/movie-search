/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * Known bugs:
 * Error stays showing after input field is full then empty
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Pagination from "react-js-pagination";

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectMovies, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import MoviesList from 'components/MoviesList';
import CenteredSection from './CenteredSection';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadMovies } from '../App/actions';
import { changeTitle, changePage } from './actions';
import { makeSelectTitle, makeSelectPage } from './selectors';
import reducer from './reducer';
import saga from '../App/saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state title is not null, submit the form to load movies
   */
  componentDidMount() {
    if (this.props.title && this.props.title.trim().length > 0) {
      this.props.onChangeTitle();
    }
  }

  render() {
    const { loading, error, movies } = this.props;
    const moviesListProps = {
      loading,
      error,
      movies,
    };

    return (
      <div>
        <Helmet>
          <title>Movie search</title>
          <meta name="description" content="Movie search" />
        </Helmet>
        <CenteredSection>
          <h1>
            <FormattedMessage {...messages.startProjectHeader} />
          </h1>
          <label htmlFor="title">
            <FormattedMessage {...messages.trymeMessage} />
            <Input
              id="title"
              type="text"
              placeholder="write the words here..."
              value={this.props.title}
              onChange={this.props.onChangeTitle}
            />
          </label>
          <br/>
          <Pagination
            hideDisabled={true}
            hideFirstLastPages={true}
            activePage={this.props.page}
            itemsCountPerPage={10}
            totalItemsCount={movies.totalResults}
            pageRangeDisplayed={5}
            onChange={this.props.onChangePage}
          />
        </CenteredSection>
        <Section className="movies container">
          <MoviesList {...moviesListProps} />
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
  movies: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.bool,
  ]),
  title: PropTypes.string,
  page: PropTypes.number,
  onChangeTitle: PropTypes.func,
  onChangePage: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTitle: (evt) => {
      dispatch(changeTitle(evt.target.value));
      if(evt.target.value != '') {
        dispatch(loadMovies());
      }
    },
    onChangePage: (evt) => {
      dispatch(changePage(evt));
      dispatch(loadMovies());
    }
    // onChangePage: (evt) => {
    //   dispatch(changePage(evt.target.value));
    //   dispatch(loadMovies());
    // }
  };
}

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
  title: makeSelectTitle(),
  page: makeSelectPage(),
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
