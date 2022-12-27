import React, { Component } from 'react'

export default class Demo extends Component {

    state = {
        count: 0
    }

    add = () => {
        /* 
        //  1、对象式的setState
        // 获取原来的值
        let { count } = this.state;
        count += 1;
        // 更新状态
        this.setState({ count }, () => {
            console.log('界面更新后的count值', this.state.count);
        })
        // console.log('界面更新前的count值', this.state.count); 
         */


        //2、函数式的setState
        this.setState(
            (state, props) => {
                console.log(state, props);
                return { count: state.count + 1 }
            },
            () => {
                console.log('界面更新后的count值', this.state.count);
            }
        )
    }



    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我加1</button>
            </div>
        )
    }
}
