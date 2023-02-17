import axios from "axios";

export function getTerminals() {
  return axios
    .get("http://localhost:8000/api/terminals/")
    .catch((err) => console.error(err));
}

export function getTerminalById(id) {
  return axios
    .get(`http://localhost:8000/api/terminals/${id}/`)
    .catch((err) => console.error(err));
}

export function getFilteredTerminals(
  serial,
  part,
  acquirer,
  status,
  model,
  location,
  note
) {
  const args = { serial, part, acquirer, status, model, location, note };
  let queryParams = "";

  Object.entries(args).forEach(([key, val]) => {
    if (val) {
      queryParams += `${key}=${val}&`;
    }
  });
  if (queryParams) {
    queryParams = "?" + queryParams.slice(0, -1);
  }

  return axios
    .get("http://localhost:8000/api/terminals/" + queryParams)
    .catch((err) => console.error(err));
}
