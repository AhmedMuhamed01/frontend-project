import React, { Component, Fragment } from "react";


class Class extends Component
{
    constructor(){
        super()
        this.state = {
            count : 0 ,
        }
    }
    get
    // increment = ()=>{
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    // decrement = ()=> {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }
    // reset = ()=>{
    //     this.setState({
    //         count:  0
    //     })
    // }

    render(){
        return(
            <Fragment>
                <h1>count : {this.state.count}</h1>
                <button onClick={()=>this.setState({count: this.state.count + 1 })}> increment</button>
                <button onClick={()=> this.setState({count: this.state.count - 1})}> decrement</button>
                <button onClick={()=> this.setState({count : 0})}> Reset</button>
            </Fragment>
        )
    }
}

export default Class