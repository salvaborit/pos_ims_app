import axios from "axios";

export function getConnectivities() {
  return axios
    .get("http://localhost:8000/api/connectivities/")
    .catch((err) => console.error(err));
}

export function getConnectivityById(id) {
  return axios
    .get(`http://localhost:8000/api/connectivities/${id}/`)
    .catch((err) => console.error(err));
}
