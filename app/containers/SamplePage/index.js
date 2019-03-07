/**
 *
 * SamplePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSamplePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { loadConfig } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class SamplePage extends React.Component {
  componentWillMount() {
    this.props.onLoadConfig();
  }

  render() {
    const { configurations } = this.props.samplePage;
    return (
      <div style={{ margin: 5 }}>
        <Typography variant="title">Welcome to YODA Platform</Typography>
        <Typography variant="body2">
          Here is a sample data from REST API
        </Typography>
        <Typography variant="body2">{configurations.totalCount}</Typography>
      </div>
    );
  }
}

SamplePage.propTypes = {
  onLoadConfig: PropTypes.func,
  samplePage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  samplePage: makeSelectSamplePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadConfig: () => dispatch(loadConfig()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'samplePage', reducer });
const withSaga = injectSaga({ key: 'samplePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SamplePage);
