import { Outlet } from 'react-router-dom'
import Navbar from '../../pages/Navbar/Navbar'

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default SharedLayout
