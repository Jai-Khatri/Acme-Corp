import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { injectNavigator } from './stores/useAuthStore';
import App from './App';

export default function AppWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    injectNavigator(navigate); 
  }, [navigate]);

  return <App />;
}
