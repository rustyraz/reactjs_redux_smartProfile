export default function(state=null,action){
  switch (action.type) {
    case "PROFILE_SELECTED":
      return action.payload
      break;
  }
  return state;
}
