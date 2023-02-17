import axios from "axios";

export function getAcquirers() {
  return axios
    .get("http://localhost:8000/api/acquirers/")
    .catch((err) => console.error(err));
}

export async function getAcquirerById(id) {
  try {
    const resp = await axios.get(`http://localhost:8000/api/acquirers/${id}/`);
    return resp.data;
  } catch (err) {
    console.error(err);
  }
}
