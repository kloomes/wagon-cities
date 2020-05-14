import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions/index';


const City = (props) => {
  return (
    <option className="list-group-item" onClick={() => props.selectCity(props.city)}>
      {props.city.name}
    </option>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}


export default connect(null, mapDispatchToProps)(City);
