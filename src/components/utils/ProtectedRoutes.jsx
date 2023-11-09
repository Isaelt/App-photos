import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = ({
    activate,
    redirect = '/login'
}) => {

  if (!activate) {
    return <Navigate to={ redirect} replace />
  } else {
    return <Outlet/>
  }
}

export default ProtectedRoutes