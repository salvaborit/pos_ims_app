import axios from "axios";

export function getStatuses() {
  return axios
    .get("http://localhost:8000/api/statuses/")
    .catch((err) => console.error(err));
}

export function getStatusById(id) {
  return axios
    .get(`http://localhost:8000/api/statuses/${id}/`)

    .catch((err) => console.error(err));
}
