export const activeSelectedProfile = (profile) =>{
  return {
    type: "PROFILE_SELECTED",
    payload: profile
  };
}
