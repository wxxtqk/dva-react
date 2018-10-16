import React, { Component } from 'react'
class Home extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return(
      <div>
        <h1>头部</h1>
      </div>
    )
  }
}
export default Home
