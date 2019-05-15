const baseURL = "http://0.0.0.0:8088";

const API = {
  getInterests: function() {
    return fetch(`${baseURL}/interests?_expand=place`).then(response =>
      response.json()
    );
  },
  postInterests: function(obj) {
    return fetch(`${baseURL}/interests?_expand=place`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  },
  patchInterests: function(obj, id) {
    return fetch(`${baseURL}/interests?_expand=place`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  }
};

export default API;
