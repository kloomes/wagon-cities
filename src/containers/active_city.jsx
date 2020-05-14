import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  console.log(props.activeCity);

  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  return (
    <div className="active-city">
      {props.activeCity.name}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
