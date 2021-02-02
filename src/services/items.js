import request from "../request-configs";

const get = async () => {
  return await request.get("users");
};

export default {
  get
};
