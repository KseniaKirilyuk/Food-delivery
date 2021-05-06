import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../components/Restaurants';

export default class App extends PureComponent {
  render() {
    return <Restaurants restaurants={this.props.restaurants} />;
  }
}
App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
