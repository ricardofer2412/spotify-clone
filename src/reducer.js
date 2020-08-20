export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: 'BQBJjhFLol75DiegqX3XRkreogaPLGD7FCUln7yFVK08cSBvQeD8_2S7eLgzy1dOPf6RkbHcALeyRuYXtJk3BtuGnkYDsglsmxbVqlRb9bfolpu3uX4X_bkDaNougZD_u9bP_r3dyN19tw'
}

const reducer = (state, action) => {
  console.log(action);


  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }

    default:
      return state;
  }

}

export default reducer;