import React, { useEffect, useRef, useState } from 'react'

export default function Test() {

    const [sum, setSum] = useState(0)

    function add() {
        setSum(presum => presum + 1)
        console.log('add方法', sum);
    }

    function output() {
        console.log(sum)
    }
    function decrement() {
        setSum(presum => presum - 1)
        console.log('decrement方法', sum);
    }

    return (
        <div>
            <h2>Function组件</h2>
            <h4>当前的求和为:{sum}</h4>
            <button onClick={add}>+1</button>&nbsp;
            <button onClick={decrement}>-1</button>&nbsp;
            <button onClick={output}>打印输出state的sum</button>
        </div>
    )
}
