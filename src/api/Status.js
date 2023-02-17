import axios from "axios";

export function getAPIStatus() {
  return axios
    .get("http://localhost:8000/api/status/")
    .catch((err) => console.error(err));
}
