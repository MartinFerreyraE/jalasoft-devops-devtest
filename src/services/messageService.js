import AxiosFactory from "./Axios";

export const messageService = {
  sendMessage: (message) => {
    const api = AxiosFactory("messages");
    return api.post("/", message);
  },
};
