import { useRoutes, RouteObject, Navigate } from 'react-router-dom'
import Layout from '../views/layout'
import Home from '../views/home'
import User from '../views/user'

const GetRouters = () => {
  const routers: RouteObject[] = useRoutes([
    {
      path: '/',
      element: < Navigate to='/layout/home' />
    },
    {
      path: '/layout',
      element: <Layout />,
      children: [
        { path: 'user', element: <User />, index: true },
        { path: 'home', element: <Home /> }
      ]
    }
  ])
  return routers
}
export default GetRouters