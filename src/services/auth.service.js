import * as dotenv from "dotenv";
dotenv.config();

const api = process.env.API_URL;

const REQUEST_CONFIG = {
  method: "",
  headers: { "Content-Type": "application/json" },
  body: null,
};

export const AuthServices = {
  async login(formData) {
    try {
      const loginRequestConfig = Object.assign(REQUEST_CONFIG);
      loginRequestConfig.method = "POST";
      loginRequestConfig.body = JSON.stringify(formData);

      const response = await fetch(`${api}/auth`, loginRequestConfig);

      console.log("response:", await response.json());
    } catch (error) {
      console.log("error:", error);
    }
  },

  async signUp() {},

  async forgotPassword() {},
};
