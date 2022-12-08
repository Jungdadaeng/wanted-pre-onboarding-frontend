import axios from "axios";

const API_URL = "https://pre-onboarding-selection-task.shop/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.access_token) {
          localStorage.setItem("user", JSON.stringify(response));
        }
        return response;
      });
  }

  register(email, password) {
    return axios.post(API_URL + "signup", {
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
