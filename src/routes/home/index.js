import React, { Component } from 'react'
import Menus from '../menu'
import { Layout } from 'antd';
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
      <div>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>
              <Menus routers={routers}></Menus>
            </Sider>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Home
