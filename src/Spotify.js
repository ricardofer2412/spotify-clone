export const authEndpoint =
  "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = 'f8695bce784a47eb97baf15215337ec2'

//this allow persmission on users
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-plaback-state",
  "user-top-read",
  "user-modify-playback-state"
]
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=")
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&${scopes.join("%20")}&response_type=token&show_dialog=true`;

