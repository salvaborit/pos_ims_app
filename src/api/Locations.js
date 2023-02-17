import axios from "axios";

export function getLocations() {
  return axios
    .get("http://localhost:8000/api/locations/")
    .catch((err) => console.error(err));
}

export function getLocationById(id) {
  return axios
    .get(`http://localhost:8000/api/locations/${id}/`)
    .catch((err) => console.error(err));
}
