import React , { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { activeSelectedProfile } from '../actions/index';

class ProfileList extends Component {

  createProfileList(){
    return this.props.userProfiles.map((profile) => {
      return (
        <li className="collection-item" key={profile.id}>
          <div>{profile.templateId} <a href="#!" className="secondary-content">
            <i
              className="material-icons"
              onClick={() => this.props.activeSelectedProfile(profile)}>
              send
            </i>
          </a></div>
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="collection with-header">
        <li className="collection-header"><b>Smart User Profiles</b></li>
        {this.createProfileList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    userProfiles: state.userProfiles
  };
}

function matchDispatchToPops(dispatch){
  return bindActionCreators({activeSelectedProfile },dispatch);
}

export default connect(mapStateToProps,matchDispatchToPops)(ProfileList);
