import React, { Component } from 'react'
import Menus from '../../components/menu'
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'dva/router'
import matchRouter from '../../utils/matchRouter'
const { Header, Sider, Content } = Layout;
class Home extends Component {
  state = {
    collapsed: false,
  }
  constructor(props) {
    super(props)
  }
  render() {
    const { match, router } = this.props
    const routers = matchRouter(match.path, router)
    return (
      <Layout style={{height: '100%'}}>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <Menus routers={routers}></Menus>
          </Sider>
          <Content>
            <Switch>
              {routers.map(item => {
                if(!item.childrens || item.childrens.length === 0) {
                  return (
                    <Route path={item.path} render={props => <item.component {...props} routers={routers}/>} key={item.path}/>
                  )
                } else {
                  return item.childrens.map(child => {
                    return (
                      <Route path={`${item.path}${child.path}`} render={props => <child.component {...props} routers={routers}  key={`${item.path}${child.path}`}/>} />
                    )
                  })
                }
              })}
              <Redirect from={routers[0].path} to={routers[0].path} />
              <Redirect from='/' to={routers[0].path} />

            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default Home
