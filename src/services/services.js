// const API_URL = 'http://localhost:8000';
const API_URL = 'https://dsa-prep-server.onrender.com'

let postOptions = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

let getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

let putOptions = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
};

let deleteOptons = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getAllQuestions = async () => {
  return await fetch(`${API_URL}/api/all`).then((res) => res.json());
};

export const getTags = async () => {
  return await fetch(`${API_URL}/api/tags`).then((res) => res.json());
};

export const getQuestion = async (id) => {
  return await fetch(`${API_URL}/api/question/${id}`).then((res) => res.json());
};


export const createQuestion = async (data) => {
  return await fetch(`${API_URL}/api/create`, {
    ...postOptions,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const updateSolved = async (data) => {
  return await fetch(`${API_URL}/api/update-solved`, {
    ...postOptions,
    body: JSON.stringify(data)
  }).then(res => res.json())
}


// export const register = async (data) => {
//   return await fetch(`${API_URL}/users/register`, {
//     ...postOptions,
//     body: JSON.stringify(data)
//   }).then(res => res.json())
// }

// export const login = async (data) => {
//   return await fetch(`${API_URL}/users/login`, {
//     ...postOptions,
//     body: JSON.stringify(data)
//   }).then(res => res.json())
// }


// export const removeFromList = async (data) => {
//   return await fetch(`${API_URL}/api/remove-from-list`, {
//     ...postOptions,
//     body: JSON.stringify(data)
//   }).then(res => res.json())
// }

