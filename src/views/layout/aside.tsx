// react hook
import { Menu, MenuProps } from 'antd'
import { useState } from 'react'
import { router_item } from '../../router'
import { useNavigate } from 'react-router-dom'
function aside() {
  // 获取路由
  const [router] = useState(router_item)

  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = e => {
    const keyPath = e.keyPath.reverse().join('/')
    navigate(`/${keyPath}`)
  };

  return (
    <>
      <Menu mode="inline"
        theme="dark" items={router} onClick={onClick} />
    </>
  )
}
export default aside