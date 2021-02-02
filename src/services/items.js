import request from "../request-configs";

export const get = async () => {
  return await request.get("todos");
};

export default {
  get
};
