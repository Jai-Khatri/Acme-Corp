import { create } from 'zustand';
import axiosInstance from '../libs/axiosInstance';

const useInfoStore = create((set) => ({
  info: [],
  loading: false,
  error: null,
  success: false,

  getUserInfo: async () => {
    set({ loading: true, error: null, success: false });

    try {
      const res = await axiosInstance.get('/api/userInfo');

      if (res.data.success) {
        set({ info: res.data.data, loading: false, success: true });
      } else {
        throw new Error(res.data.error || 'Failed to fetch user info');
      }
    } catch (err) {
      console.error('getUserInfo error:', err.message);
      set({ error: err.message, loading: false, success: false });
    }
  },

  postUserInfo: async (userId, infoData) => {
    set({ loading: true, error: null, success: false });

    try {
      const res = await axiosInstance.post(`/api/userInfo/${userId}`, infoData);

      if (res.data.success) {
        set((state) => ({
          info: [...state.info, res.data.data],
          loading: false,
          success: true,
        }));
      } else {
        throw new Error(res.data.error || 'Failed to post user info');
      }
    } catch (err) {
      console.error('postUserInfo error:', err.message);
      set({ error: err.message, loading: false, success: false });
    }
  },

  clearInfoState: () => set({ info: [], loading: false, error: null, success: false }),
}));

export default useInfoStore;
