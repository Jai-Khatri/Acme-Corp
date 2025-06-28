import { create } from 'zustand';
import axiosInstance from '../libs/axiosInstance';
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';

// Create a custom hook with navigation inside Zustand-compatible function
let navigate = null;
export const injectNavigator = (navFn) => {
  navigate = navFn;
};

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      loading: false,
      error: null,

      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const res = await axiosInstance.post('/api/user/login', {
            email,
            password,
          });

          if (res.data.success) {
            const { user, token } = res.data;

            // Attach token globally
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('token', token);

            set({ user, isAuthenticated: true, token, loading: false });

            if (navigate) navigate('/dashboard');
          } else {
            throw new Error(res.data.error || 'Login failed');
          }
        } catch (err) {
          console.error('Login error:', err.message);
          set({ error: err.message, loading: false });
        }
      },

      signup: async (name, email, password) => {
        set({ loading: true, error: null });
        try {
          const res = await axiosInstance.post('/api/user', {
            name,
            email,
            password,
          });

          if (res.data.success) {
            set({ loading: false });
            if (navigate) navigate('/login');
          } else {
            throw new Error(res.data.error || 'Signup failed');
          }
        } catch (err) {
          console.error('Signup error:', err.message);
          set({ error: err.message, loading: false });
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        delete axiosInstance.defaults.headers.common['Authorization'];
        set({ user: null, isAuthenticated: false, token: null });
        if (navigate) navigate('/login');
      },

      initializeAuth: () => {
        const token = localStorage.getItem('token');
        if (token) {
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          set({ token, isAuthenticated: true });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
