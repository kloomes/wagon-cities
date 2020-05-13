import React, { Component } from 'react';

import City from '../containers/city';

class CityList extends Component {
  render() {
    return this.props.cities.map((city) => {
      return (
        <ul className="list-group cities">
          <City city={city} key={city.name} />
        </ul>
      );
    });
  }
}

export default CityList;
