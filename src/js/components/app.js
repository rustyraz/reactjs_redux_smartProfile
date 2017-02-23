import React from 'react';
import ProfileList from '../containers/user_profile_list';
//import ProfileDetails from '../containers/user_profile_details';
import DynamicProfileDetails from '../containers/dynamic_selected_profile';

const App = () => (
  <div className="row">
    <div className="col s3">
      <ProfileList />
    </div>
    <div className="col s9 card">
      <div className="card-content">
        <b>Details</b>
        <hr/>
        <DynamicProfileDetails/>
      </div>
    </div>


  </div>
);

export default App;
