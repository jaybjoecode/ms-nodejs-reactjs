import { Navigate, Outlet } from 'react-router-dom'

export const AdminProtectedRoutes = ({children}) => {
  let token = true;

  return (
    <>
      {token ? <Outlet /> : <Navigate to='/login' />}
    </>
  )
}