import { Outlet } from 'react-router-dom'
function Login() {
  return (
    <div>
      <div>登录</div>
      <Outlet />
    </div>
  )
}
export default Login