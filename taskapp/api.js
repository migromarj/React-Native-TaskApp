// Web site
const API = "http://localhost:3000/tasks"

//Mobile phone
//const API = "http://10.0.2.2:3000/tasks" 

export const getTasks = async () => {
  const res = await fetch(API, {
    method: "GET",
  })
  return await res.json()
}

export const getTask = async (taskId) => {
  const res = await fetch(`${API}/${taskId}`)
  return await res.json()
}

export const saveTask = async (newTask) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  })
  return await res.json()
}

export const updateTask = async (taskId, newTask) => {
  const res = await fetch(`${API}/${taskId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  })
  return res
}

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  })
}