import instance from "../axios";

const userAuthApi = {
  login: ({ email, password }) => {
    return instance.post("api/user/login", { email, password });
  },
  signup: ({ email, password, username }) => {
    return instance.post("api/user/signup", { email, password, username });
  },
  forgot_password_request: ({ email }) => {
    // After sending the email, you will recieve a link with a token to url endpoint: /user/password-reset/${token}
    return instance.get(`api/user/reset-password-send-link?email=${email}`);
  },
  reset_password: ({ token, password }) => {
    return instance.post("api/user/verify-and-reset-password", {
      token,
      password,
    });
  },
  update_password: ({ token, oldPassword, newPassword }) => {
    return instance.put(
      "api/user/update-password",
      {
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  // To Get A Particular User's Data
  getUserData: ({ token, username }) => {
    return instance.get(`api/user/get-user-data?username=${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  // To get list of users on search query whose username starts with the query
  getUserList: ({ token, username }) => {
    return instance.get(`api/user/get-users-data?username=${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default userAuthApi;
