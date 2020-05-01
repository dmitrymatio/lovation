/* eslint-disable prefer-template */
function getQueryParameters(location, n) {
  const half = location.split(n + "=")[1];
  return half !== undefined ? decodeURIComponent(half.split("&")[0]) : null;
}
export default getQueryParameters;
