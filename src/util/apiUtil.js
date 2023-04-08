const API_URL = "https://www.pre-onboarding-selection-task.shop";

const customFetch = (url, ...args) =>
  fetch(API_URL + url, ...args)
    .then((res) => {
      if (res.headers.get("content-length") > 0) {
        return res.json();
      }

      return {};
    })
    .then((res) => {
      if (res.error || res.statusCode >= 400) {
        throw new Error(
          Array.isArray(res.message) ? res.message.join("\n") : res.message
        );
      }
      return res;
    });

export default customFetch;
