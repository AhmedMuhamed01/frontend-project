import React, { Component, Fragment } from 'react'

 class ClassComponent extends Component {
  constructor(){
    super()
    this.state = {
     count: 0 ,
    }
  }
  componentDidMount()
{
  document.title = this.state.count
}
  shouldComponentUpdate(){
    return true
  }
  componentDidUpdate(){
  document.title = this.state.count

  }
  render() {
    return (
      <Fragment>
        <h1>{this.state.count}</h1>
        <button onClick={()=> this.setState({count : this.state.count +1 })}>btn</button>
      </Fragment>
    )
  }
}

export default ClassComponent