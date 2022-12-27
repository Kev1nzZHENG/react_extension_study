import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        sum: 0
    }

    add = () => {
        const { sum } = this.state;
        this.setState({
            sum: sum + 1
        })
        console.log('add方法', this.state.sum);
    }

    output = () => {
        console.log(this.state.sum);
    }
    render() {
        return (
            <div>
                <h2>class组件</h2>
                <h4>当前的求和为:{this.state.sum}</h4>
                <button onClick={this.add}>+1</button>&nbsp;
                <button onClick={this.output}>打印输出state的sum</button>
            </div>
        )
    }
}
