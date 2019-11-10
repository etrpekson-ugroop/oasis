import React, { Fragment, Component } from 'react';
import Sample from './components/Sample';

export class API extends Component {
  shouldComponentUpdate = () => false;

  render = () => (
    <Fragment>
      <Sample />
    </Fragment>
  );
}

API.propTypes = {};
API.defaultProps = {};

export default API;
