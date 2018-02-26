/**
 * MovieItem
 *
 * Lists the name and the issue count of a movies
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentTitle } from 'containers/App/selectors';
import Li from './Li';
import Img from './Img';

export class MovieItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    return (
      <Li key={`movie-list-item-${item.imdbID}`}>
        <div>
          <Link to={`/movie?imdb=${item.imdbID}`}>
            <Img src={item.Poster} alt={item.Title} />
            <h4>{item.Title}</h4>
          </Link>
        </div>
      </Li>
    );
  }
}

MovieItem.propTypes = {
  item: PropTypes.object,
  currentTitle: PropTypes.string,
};

export default connect(createStructuredSelector({
  currentTitle: makeSelectCurrentTitle(),
}))(MovieItem);
