import React, { useState } from 'react'

export default function Child() {

/*     const [users] = useState([
        { id: '001', name: 'tom', age: 18 },
        { id: '002', name: 'jack', age: 19 },
        { id: '003', name: 'peiqi', age: 20 },
    ]); */

    const [users] = useState('')

    return (
        <div>
            <h2>我是Child组件</h2>
            {
                users.map(userObj => {
                    return <h4 key={userObj.id}>{userObj.name}--{userObj.age}</h4>
                })
            }
        </div>
    )
}
