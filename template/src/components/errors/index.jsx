import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Errors, errorsActions as Actions } from '@openmrs/react-components';

const ErrorsComponent = ({ state, dispatch }) => {
  return (
    <div>
      <h1>Errors Component</h1><hr />
      <button onClick={() => {dispatch({ type: "ERROR", error: {message: `This is a new error!`} });}} >Add Error</button>

      <Errors/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps)(ErrorsComponent);
