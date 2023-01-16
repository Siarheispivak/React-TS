import React, {useMemo, useState} from 'react';

export const DifficultCountingExample = () => {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random();
            }
            resultA *= i
        }
        return resultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
};

 const UsersSecret = (props:{users:Array<string>}) => {
    console.log('rerender users secret')
    return (
        <div>
            {props.users.map((el,i)=> <div key={i}>{el}</div>)}
        </div>
    )
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima','Sasha','Sergei'])

    const newArrayMemo = useMemo(()=>{
        const newArray = users.filter(u=>u.indexOf('a') > -1)
        return newArray
    },[users])

    const addUser = () => {
        // users.push('sveta' + new Date().getTime() )
        setUsers([...users,'sveta' + new Date().getTime()])
    }
    return (
        <>
            <button onClick={addUser}>Add User</button>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <Users users={newArrayMemo}/>
        </>
    )
};


