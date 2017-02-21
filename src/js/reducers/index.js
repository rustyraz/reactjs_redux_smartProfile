//combine our reducers data into store
'use strict';
import {combineReducers} from 'redux';

//list of profile
import userProfiles from './user_profiles';
import activeSelectedProfile from './active_selected_profile';

const allReducers = combineReducers({
  userProfiles,
  activeSelectedProfile
});

export default allReducers;
