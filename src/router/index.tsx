import { useRoutes, RouteObject, Navigate } from 'react-router-dom'
import Layout from '../views/layout'
import Home from '../views/home'
import User from '../views/user'

export const router_item: Array<object> = [
  {
    path: '/',
    label: '首页',
    key: '/',
    element: < Navigate to='/layout/home' />
  },
  {
    path: '/layout',
    element: <Layout />,
    label: '控制台',
    key: 'layout',
    children: [
      { path: 'user', key: 'user', label: '用户', element: <User /> },
      { path: 'home', key: 'home', label: '主页', element: <Home /> }
    ]
  }
]

const GetRouters = () => {
  const routers: RouteObject[] = useRoutes(router_item)
  return routers
}
export default GetRouters