import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
const SubMenu = Menu.SubMenu
const Menus = (props) => {
  const {routers} = props
  return (
    <div>
      <Menu
        defaultSelectedKeys={[routers[0].path]}
        mode="inline"
        theme="dark"
      >
        {routers.map(item => {
          if (!item.childrens) {
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>
                  <Icon type="pie-chart" />
                  <span>{item.name}</span>
                </Link>
              </Menu.Item>
            )
          } else {
            return (
              <SubMenu key={item.path} title={<span><Icon type="mail" /><span>{item.name}</span></span>}>
                {item.childrens.map(childs => {
                  return (
                    <Menu.Item key={childs.path}>
                      <Link to={`${item.path}${childs.path}`}>
                        <span>{item.name}</span>
                      </Link>
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
