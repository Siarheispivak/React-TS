import React, {useState} from 'react';



const NewMessageCounter = (props: { count:number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props:{users:Array<string>}) => {
    console.log('rerender users')
    return (
        <div>
            {props.users.map((el,i)=> <div key={i}>{el}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima','Sasha','Sergei'])

    const addUser = () => {
        // users.push('sveta' + new Date().getTime() )
        setUsers([...users,'sveta' + new Date().getTime()])
    }
        return (
            <>
                <button onClick={()=>setCounter(counter+1)}>+</button>
                <button onClick={addUser}>Add User</button>
                <NewMessageCounter count={counter}/>
                <Users users={users}/>
            </>
        )
};

