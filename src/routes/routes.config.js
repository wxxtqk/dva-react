
import React, { createElement } from 'react'
import { Spin } from 'antd'
import Loadable from 'react-loadable'
// 设置路由
// 动态加载路由
const dynamicWrapper = (app, component, model) => {
  // 加载model
  if(model){
    app.model(require(`../models/${model}`).default)
  }
  // 动态返回组件
  return Loadable({
    loader: component,
    loading: () => {
      return <Spin size="large" className="global-spin" />
    }
  })
} 
const getRouters = app => {
  const routers = [
    {
      path: '/login',
      name: '登录',
      component: dynamicWrapper(app, () => import('./login'))
    }, {
      path: '/',
      name: '主页',
      component: dynamicWrapper(app, () => import('./home'), 'home'),
      childrens: [
        {
          path:'/dashboard',
          name: '仪表盘',
          component: dynamicWrapper(app, () => import('../components/dashboard'))
        },
        {
          path: '/user',
          name: '用户列表',
          component: dynamicWrapper(app, ()=> import('../components/user')),
          childrens: [
            {
              name: '新增用户',
              path: '/add',
              component: dynamicWrapper(app, ()=> import('../components/user'))
            }
          ]
        }
      ]
    }
  ]
  return routers
}
export default getRouters