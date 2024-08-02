import axios from "axios";

const request = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api",
});

// custom ra cac phuong thuc get post put

export const get = async (path, param = {}) => {
  // can use Promise or async cua ES6

  const response = await request.get(path, param);

  return response.data;
};

export default request;
