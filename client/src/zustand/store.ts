import { create } from "zustand";
import { post } from "../api/baseApi";

type AdminLoginStore = {
  login: (username: string, password: string) => Promise<void>;
  refreshToken: () => Promise<void>;
  loading: boolean;
  success: boolean;
  error: boolean;
  isAuthorized: boolean;
  restoringSession: boolean;
  data: { accessToken: string; success: boolean } | null;
  errorData: any;
};

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
  isAuthorized: false,
};

export const adminLoginStore = create<AdminLoginStore>((set, get) => ({
  ...initialState,
  restoringSession: true,

  login: async (username: string, password: string) => {
    set({ ...initialState, loading: true });

    try {
      const res = await post("/admin/login", { username, password });

      if (res?.data?.accessToken) {
        set({
          loading: false,
          success: true,
          isAuthorized: true,
          restoringSession: false,
          data: res.data,
        });
      } else {
        console.log("Failed to login");
      }
    } catch (error) {
      set({
        loading: false,
        error: true,
        isAuthorized: false,
        restoringSession: false,
        errorData: (error as any).response.data,
      });
    }
  },

  refreshToken: async () => {
    try {
      const res = await post(
        "/admin/refresh-token",
        {},
        { withCredentials: true }
      );

      set({
        loading: false,
        success: true,
        isAuthorized: true,
        restoringSession: false,
        data: res.data,
      });
    } catch (error) {
      console.log("Failed to refresh token", error);
        set({
          error: true,
          success: false,
          isAuthorized: false,
          restoringSession: false,
        });
    }
  },
}));
