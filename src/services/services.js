const API_URL = 'http://localhost:8000';
// const API_URL = 'https://dsa-prep-server.onrender.com'

let postOptions = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
  },
};

let getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
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
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
  },
};

let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getAllQuestions = async () => {
  return await fetch(`${API_URL}/api/all`, {
    ...getOptions,
  }).then((res) => res.json());
};

export const getTags = async () => {
  return await fetch(`${API_URL}/api/tags`, {
    ...getOptions,
  }).then((res) => res.json());
};

export const getQuestion = async (id) => {
  return await fetch(`${API_URL}/api/question/${id}`, {
    ...getOptions,
  }).then((res) => res.json());
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

export const deleteFile = async (data) => {
  return await fetch(`${API_URL}/api/delete`, {
    ...deleteOptons,
    body: JSON.stringify(data)
  }).then(res => res.json())
}


export const register = async (data) => {
  return await fetch(`${API_URL}/api/users/sign-up`, {
    ...postOptions,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const login = async (data) => {
  return await fetch(`${API_URL}/api/users/sign-in`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },    
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const test = async (data) => {
  return await fetch(`${API_URL}/api/users/test`, {
    ...getOptions,
  }).then(res => res.json())
}

// export const removeFromList = async (data) => {
//   return await fetch(`${API_URL}/api/remove-from-list`, {
//     ...postOptions,
//     body: JSON.stringify(data)
//   }).then(res => res.json())
// }

