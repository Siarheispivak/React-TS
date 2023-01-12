import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type RatingPropsType = {
    value: RatingValueType
    onClick:(value:RatingValueType)=>void
}
type StarPropsType = {
    selected: boolean
    value:RatingValueType
    onClick:(value:RatingValueType)=>void
}

function Star(props: StarPropsType) {
    return <span onClick={()=>{props.onClick(props.value)}}>
             { props.selected ? <b> star </b> : 'star '}
         </span>
}

const StarContainerComponent = React.memo(Star)

export function Rating(props: RatingPropsType) {
    console.log('star rednering')
        return (
            <div>
                <StarContainerComponent selected={props.value > 0} onClick={props.onClick} value={1}/>
                <StarContainerComponent selected={props.value > 1} onClick={props.onClick} value={2}/>
                <StarContainerComponent selected={props.value > 2} onClick={props.onClick} value={3}/>
                <StarContainerComponent selected={props.value > 3} onClick={props.onClick} value={4}/>
                <StarContainerComponent selected={props.value > 4} onClick={props.onClick} value={5}/>
            </div>
        )
}

