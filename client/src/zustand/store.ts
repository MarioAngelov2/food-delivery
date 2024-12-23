import axios from "axios";
import { create } from "zustand";

const URL = "http://localhost:3000";

type AdminStore = {
  login: (username: string, password: string) => Promise<void>;
  loading: boolean;
  success: boolean;
  error: boolean;
  data: any;
  errorData: any;
};

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};

export const adminLoginStore = create<AdminStore>((set, get) => ({
  ...initialState,

  login: async (username: string, password: string) => {
    set({ ...initialState, loading: true });

    try {
      const res = await axios.post(`${URL}/admin/login`, {
        username,
        password,
      });
      set({ loading: false, success: true, data: res.data });
    } catch (error) {
      set({
        loading: false,
        error: true,
        errorData: (error as any).response.data,
      });
    }
  },
}));
