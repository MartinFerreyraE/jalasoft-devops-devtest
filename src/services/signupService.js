import AxiosFactory from "./Axios";

export const signupService = {
  registerEmail: (data) => {
    const api = AxiosFactory("users");
    return api.post("/", data);
  },
  verificationCode: (code) => {
    const api = AxiosFactory("users");
    return api.get(`/${code}`);
  },
  userInitialAccountSettings: (data) => {
    console.log("data", data);
    const api = AxiosFactory("users");
    return api.put("/", data);
  },
};
