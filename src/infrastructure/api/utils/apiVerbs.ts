const getVerb = (endpoint: string) => {
  return fetch(endpoint);
};

const postVerb = (endpoint: string, body) => {
  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

const putVerb = (endpoint: string, body) => {
  return fetch(`${endpoint}/${body.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

const delVerb = (endpoint: string, id) => {
  return fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  });
};

export { getVerb, postVerb, putVerb, delVerb };
