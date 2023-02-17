import axios from "axios";

export function getModels() {
  return axios
    .get("http://localhost:8000/api/models/")
    .catch((err) => console.error(err));
}

export function getModelById(id) {
  return axios
    .get(`http://localhost:8000/api/models/${id}/`)
    .catch((err) => console.error(err));
}
