import { Component } from 'react';
import resaga, { reducer } from 'resaga';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import { SAMPLE_API, GET_MESSAGE } from 'apis/constants';
import { CONFIG } from './config';

export class Sample extends Component {
  componentDidMount = () => {
    console.log('NICE');
    const payload = { name: 'Nice' };
    this.props.resaga.dispatchTo(SAMPLE_API, GET_MESSAGE, { payload });
    return this.props.resaga.setValue({ hello: 'HHAHAHAHAHAHA' });
  };

  componentWillReceiveProps = nextProps => {
    this.props.resaga.analyse(nextProps, {
      [GET_MESSAGE]: {
        onSuccess: this.props.resaga.setValue,
      },
    });
  };

  shouldComponentUpdate = () => false;

  render = () => null;
}

Sample.propTypes = {
  // hoc props
  resaga: PropTypes.object.isRequired,
};

Sample.defaultProps = {};

export default compose(
  injectReducer({ key: SAMPLE_API, reducer: reducer(SAMPLE_API) }),
  resaga(CONFIG),
)(Sample);
