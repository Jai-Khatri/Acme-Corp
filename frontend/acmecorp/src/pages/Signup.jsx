import { useState } from 'react';
import useAuthStore from '../stores/useAuthStore';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = useAuthStore((state) => state.signup);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1c1c1c] to-black">
      <div className="bg-[#121212] rounded-3xl px-10 py-12 w-[400px] text-white shadow-lg">
        <h2 className="text-center text-3xl font-bold mb-8">Sign up</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-full px-4 py-2 text-white bg-[#2b2b2b] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full px-4 py-2 text-white bg-[#2b2b2b] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full px-4 py-2 text-white bg-[#2b2b2b] focus:outline-none"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-[#2b2b2b] text-white py-2 rounded-md font-semibold hover:bg-[#333]"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  );
}
