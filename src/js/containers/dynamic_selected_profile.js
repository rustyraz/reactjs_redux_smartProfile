import React , { Component } from 'react';
import {connect} from 'react-redux';

import * as Templates from '../components/templates';

class DynamicProfileDetails extends Component{
  render(){
    if(!this.props.data){
      return (<b>"Select a profile to view"</b>);
    }else{
      const Temp = Templates[`${this.props.data.templateId}`];
      return (<Temp />);
    }

  }
}

function mapStateToProps(state) {
  return {
    data: state.activeSelectedProfile
  };
}

export default connect(mapStateToProps)(DynamicProfileDetails);
