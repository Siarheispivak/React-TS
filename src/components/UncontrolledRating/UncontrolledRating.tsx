import React, {useState,MouseEvent} from "react";

type UncontrolledType = {

}
type StarPropsType = {
    selected: boolean
    setValue: ()=>void
}
function Star(props: StarPropsType) {
    return <span onClick={()=>{props.setValue()}}>
        { props.selected ? <b> star </b> :  'star '}
    </span>

}

const StarContainerComponent = React.memo(Star)
console.log('uncontrolled star rednering')
export function UncontrolledRating(props:UncontrolledType) {

let [value,setValue] = useState(0)

        return (
            <div>
                <StarContainerComponent selected={value > 0} setValue={()=>{setValue(1)}}/>
                <StarContainerComponent selected={value > 1} setValue={()=>{setValue(2)}}/>
                <StarContainerComponent selected={value > 2} setValue={()=>{setValue(3)}}/>
                <StarContainerComponent selected={value > 3} setValue={()=>{setValue(4)}}/>
                <StarContainerComponent selected={value > 4} setValue={()=>{setValue(5)}}/>
            </div>
        )
}

