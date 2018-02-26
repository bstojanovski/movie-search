import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentTitle } from 'containers/App/selectors';

export class Error extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    return (
      <h4 className="center error">
        {item.Error}
      </h4>
    );
  }
}

export default (Error);
