import instance from "../axios";

const orgAuthApi = {
  login: ({ orgName, password }) => {
    return instance.post("api/user/login", { email: orgName, password });
  },
  register: ({ orgName, password, description }) => {
    return instance.post("api/user/signup", { email:orgName, password, username:description });
  },
  // To Get A Particular Organization's Data
  getOrganizationData: ({ token, orgName }) => {
    return instance.get(`api/user/get-user-data?username=${orgName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  // To get list of events of particular organization
  getEventList: ({ token, orgName }) => {
    return instance.get(`api/user/get-users-data?username=${orgName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default orgAuthApi;
