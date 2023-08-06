import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function Logout() {
  const { navigate } = useNavigate()
  const { logout } = useAuthContext()

  useEffect(()=>{
    logout()
  }, [])

  return (
    <Navigate to='/' />
  );
};
