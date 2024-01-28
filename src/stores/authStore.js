import { defineStore } from "pinia";
import axios from "axios";

const apiurl = "http://localhost:8000/api/users/";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    isLoading: false,
  }),

  actions: {
    async register(formdata) {
      const response = await axios.post(apiurl, formdata);

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    },

    async login(formdata) {
      const response = await axios.post(`${apiurl}login`, formdata);

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    },

    async logout() {
      localStorage.removeItem("user");
    },
  },
});
