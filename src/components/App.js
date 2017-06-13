import React from "react";
import {connect} from 'react-redux';

class App extends React.Component
{
render()
{
return
(
<div>
<h1>this.props.user.name </h1>
</div>
);
}
}

const mapStateToProps = (state)=>
{
  return
  {
      user : state.userReducer
  }
};

const mapDispatchToProps=(dispatch)=>
{
  return
  {
  setName:(name)=>
  {
    dispatch(
      {
        type:"SET_NAME",
        payload:name
      }
    );
  }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
