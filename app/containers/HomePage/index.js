/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import resaga from 'resaga';
import { CONFIG } from './config';

export class Home extends PureComponent {
  render() {
    const { message } = this.props;
    console.log('HOME', { message });
    return <h1>{message}</h1>;
  }
}

Home.propTypes = {
  message: PropType.string,
};

export default resaga(CONFIG)(Home);
