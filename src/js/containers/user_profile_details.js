import React , { Component } from 'react';
import {connect} from 'react-redux';

class ProfileDetails extends Component{
  render(){
    if(!this.props.profile){
      return (<b>"Select a profile to view"</b>);
    }else{
      return(
        <div>
          <div className="row">
            <div className="col s4">
              <img width="200" className="circle" alt="" src={this.props.profile.profile.photo} />
            </div>
            <div className="col s8">
              <ul className="collection">
                <li className="collection-item" ><b>Name: </b>{this.props.profile.profile.name}</li>
                <li className="collection-item"><b>Title: </b>{this.props.profile.profile.jobTitle}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="card-panel">
                <b>Profile Intro & Objective</b>
              </div>
              {this.props.profile.profile.objective}
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="card-panel">
                <b>Experience</b>
              </div>
              <div className="row">
                <div className="col s2 blue-text"><b>JAN 2015 - JUN 2016</b></div>
                <div className="col s10">
                  <b>Back-end Developer</b><br/>
                  <em className="blue-text">Freelance</em>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. </p>
                </div>
              </div>

              <div className="row">
                <div className="col s2 blue-text"><b>JAN 2015 - JUN 2016</b></div>
                <div className="col s10">
                  <b>Back-end Developer</b><br/>
                  <em className="blue-text">Freelance</em>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. </p>
                </div>
              </div>

              <div className="row">
                <div className="col s2 blue-text"><b>JAN 2015 - JUN 2016</b></div>
                <div className="col s10">
                  <b>Back-end Developer</b><br/>
                  <em className="blue-text">Freelance</em>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        );
    }

  }
}


function mapStateToProps(state) {
  return {
    profile: state.activeSelectedProfile
  };
}

export default connect(mapStateToProps)(ProfileDetails);
