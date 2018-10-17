import React from 'react'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
const Menus = (props) => {
  const {routers} = props
  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={[routers[0].path]}
        mode="inline"
        theme="dark"
      >
        {routers.map(item => {
          if (!item.childrens) {
            return (
              <Menu.Item key={item.path}>
                <Icon type="pie-chart" />
                <span>{item.name}</span>
              </Menu.Item>
            )
          } else {
            return (
              <SubMenu key={item.path} title={<span><Icon type="mail" /><span>{item.name}</span></span>}>
                {item.childrens.map(childs => {
                  return (
                    <Menu.Item key={childs.path}>
                      <span>{item.name}</span>
                    </Menu.Item>
                  )
                })}
              </SubMenu>
            )
          }
        })}
      </Menu>
    </div>
  )
}
export default Menus
