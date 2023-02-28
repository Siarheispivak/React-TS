import React, {useMemo, useState} from 'react';
type TownType = {
    title: string,
    country:string,
    countryId:number
}
type TownsSecretType = {
    city:TownType[]
}

export const TownsSecret = (props:TownsSecretType) => {
    console.log('TownsSecret')
    return (
        <div>
            {props.city.map((el,i)=> <div key={i}>{el.title} {el.countryId}</div>)}
        </div>
    )
}
const Towns = React.memo(TownsSecret)

export const HelpsToTownsReactMemo = () => {
    console.log('HelpsToTowns:')
    const [counter, setCounter] = useState(0)
    const [towns, setTowns] = useState([
        {title: 'Minsk', country: 'Belarus', countryId: 2},
        {title: 'Gomel', country: 'Belarus', countryId: 2},
        {title: 'Brest', country: 'Belarus', countryId: 2},
        {title: 'Mogiliov', country: 'Belarus', countryId: 2},
        {title: 'Vitebsk', country: 'Belarus', countryId: 2},
        {title: 'Moscow', country: 'Russia', countryId: 1},
        {title: 'Piter', country: 'Russia', countryId: 1},
        {title: 'Kastroma', country: 'Russia', countryId: 1},
        {title: 'Kaliningrad', country: 'Russia', countryId: 1},
        {title: 'Vladivostok', country: 'Russia', countryId: 1},
        {title: 'Kiev', country: 'Ukraine', countryId: 3},
        {title: 'Harkav', country: 'Ukraine', countryId: 3},
        {title: 'Odessa', country: 'Ukraine', countryId: 3},
        {title: 'Semferopol', country: 'Ukraine', countryId: 3},
        {title: 'Gorlovka', country: 'Ukraine', countryId: 3},
    ])

    const newArray = useMemo(()=>{
        const newArray = towns.filter(u => u.country === 'Belarus')
        // console.log(newArray)
        // const filterByCountryId = towns.filter(u => u.countryId === 1)
        return  newArray
    },towns)

    const addUser = () => {
        setTowns([...towns, {title: 'Gomel'+ new Date().getTime(), country:'Belarus',countryId:2 }])
    }
    // console.log(towns)
    // console.log(newArray)
    return (
        <>
            <Towns city={newArray} />

            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <button onClick={addUser}>Add User</button>
        </>
    )
};
