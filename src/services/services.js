// const API_URL = 'http://localhost:8000';
const API_URL = 'https://dsa-prep-server.onrender.com'

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
  mode: "cors",
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
  mode: "cors",
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

const checkTokenValidity = (res) => {
  if(res.status==200){
    return res.json()
  }else if(res.status == 404 || res.status == 403){
    localStorage.removeItem('token')
    window.location.pathname = 'sign-in'
  }
}

export const getAllQuestions = async () => {
  return await fetch(`${API_URL}/api/all`, {
    ...getOptions,
  }).then((res) => checkTokenValidity(res));
};

export const getMyQuestions = async () => {
  return await fetch(`${API_URL}/api/my-questions`, {
    ...getOptions,
  }).then((res) => checkTokenValidity(res));
};

export const getUserQuestions = async (id) => {
  return await fetch(`${API_URL}/api/questions/${id}`, {
    ...getOptions,
  }).then((res) => checkTokenValidity(res));
};

export const getTags = async () => {
  return await fetch(`${API_URL}/api/tags`, {
    ...getOptions,
  }).then((res) => checkTokenValidity(res));
};

export const getQuestion = async (id) => {
  return await fetch(`${API_URL}/api/question/${id}`, {
    ...getOptions,
  }).then((res) => checkTokenValidity(res));
};



export const createQuestion = async (data) => {
  return await fetch(`${API_URL}/api/create`, {
    ...postOptions,
    body: JSON.stringify(data)
  }).then(res => checkTokenValidity(res))
}

export const updateSolved = async (data) => {
  return await fetch(`${API_URL}/api/update-solved`, {
    ...postOptions,
    body: JSON.stringify(data)
  }).then(res => checkTokenValidity(res))
}

export const deleteFile = async (data) => {
  return await fetch(`${API_URL}/api/delete`, {
    ...deleteOptons,
    body: JSON.stringify(data)
  }).then(res => checkTokenValidity(res))
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


export const getAllUsers = async () => {
  return await fetch(`${API_URL}/api/users/all`, {
    ...getOptions,
  }).then((res) => checkTokenValidity(res));
};


export const test = async (data) => {
  return await fetch(`${API_URL}/api/users/test`, {
    ...getOptions,
  }).then(res => checkTokenValidity(res))
}

// export const removeFromList = async (data) => {
//   return await fetch(`${API_URL}/api/remove-from-list`, {
//     ...postOptions,
//     body: JSON.stringify(data)
//   }).then(res => res.json())
// }

