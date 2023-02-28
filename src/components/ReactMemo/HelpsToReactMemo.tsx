import React, {useMemo, useState} from 'react';

export const UsersSecret = (props:{users:Array<string>}) => {
    return (
        <div>
            {props.users.map((el,i)=> <div key={i}>{el}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima','Sasha','Sergei'])

    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.toUpperCase().indexOf('a')>-1)
        return newArray
    },users)

    const addUser = () => {
        // users.push('sveta' + new Date().getTime() )
        setUsers([...users,'sveta' + new Date().getTime()])
    }
    return (
        <>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <button onClick={addUser}>Add User</button>

            <Users users={newArray}/>
        </>
    )
};
