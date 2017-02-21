export const activeSelectedProfile = (profile) =>{
  console.log('User clicked : ',profile);
  return {
    type: "PROFILE_SELECTED",
    payload: profile
  };
}
