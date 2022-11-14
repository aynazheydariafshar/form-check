export const loadState = () => {
  try {
    if (localStorage.getItem("user") === null) {
      return undefined;
    }
    return JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    return undefined;
  }
};

export const setcartItems = (state) => {
  try {
    localStorage.setItem("user", JSON.stringify(state));
  } catch {
    alert("خطایی رخ داده است");
  }
};
