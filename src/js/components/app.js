import React from 'react';
import ProfileList from '../containers/user_profile_list';
import ProfileDetails from '../containers/user_profile_details';

const App = () => (
  <div className="row">
    <div className="col s3">
      <ProfileList />
    </div>
    <div className="col s9 card">
      <div className="card-content">
        <b>Details</b>
        <hr/>
        <ProfileDetails/>
      </div>
    </div>


  </div>
);

export default App;
