// react hook
import { Menu, MenuProps } from 'antd'
import { useState } from 'react'
import { router_item } from '../../router'
import { useNavigate } from 'react-router-dom'
function aside() {
  // 获取路由
  const [router] = useState(router_item)

  const navigate = useNavigate()
  const storageSelectKeys = sessionStorage.getItem('selectKeys')
  const [selectKeys, setSelectKeys] = useState(storageSelectKeys)
  const [openKeys, setOpenKeys] = useState(storageSelectKeys)


  const onClick: MenuProps['onClick'] = e => {
    const keyPath = e.keyPath.reverse().join('/')
    navigate(`/${keyPath}`)
    setSelectKeys(e.key)
    sessionStorage.setItem('selectKeys', e.key)
  };

  return (
    <>
      <Menu
        onClick={onClick}
        mode="inline"
        theme="dark"
        defaultOpenKeys={['layout']}
        defaultSelectedKeys={selectKeys}
        items={router}
      />
    </>
  )
}
export default aside