import fetch from "./apiUtil";

const getTodoList = (jwtToken) => {
  if (!jwtToken) return Promise.reject();

  return fetch("/todos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

const createTodo = (jwtToken, todo) => {
  if (!jwtToken) return Promise.reject();

  return fetch("/todos", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo }),
  });
};

const updateTodo = (jwtToken, id, todo, isCompleted) => {
  if (!jwtToken) return Promise.reject();

  return fetch(`/todos/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo, isCompleted }),
  });
};

const deleteTodo = (jwtToken, id) => {
  if (!jwtToken) return Promise.reject();

  return fetch(`/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { getTodoList, createTodo, updateTodo, deleteTodo };
