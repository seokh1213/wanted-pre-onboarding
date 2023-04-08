import fetch from "./apiUtil";

const signUpApi = (email, password) =>
  fetch("/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

const signInApi = (email, password) =>
  fetch("/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

export { signUpApi, signInApi };
