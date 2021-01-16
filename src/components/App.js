import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inclement , declement } from '../actions';

class App extends Component{
  render(){
    const props = this.props;

    return (
      <React.Fragment>
        <div>count: { props.value }</div>
        <button onClick={props.inclement}>+1</button>
        <button onClick={props.declement}>-1</button>
      </React.Fragment>
    )
  }
};

const mapStateToProps = state => ({ value: state.count.value });
const mapDispatchToProps = dispatch => ({
  inclement: () => dispatch(inclement()),
  declement: () => dispatch(declement())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

