import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

type Props = {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: Props) => {
  const user = useAppSelector((state) => state.user.user)
  if (user) {
    return <Navigate to='/' />
  }
  return children
}

export default ProtectedRoute
