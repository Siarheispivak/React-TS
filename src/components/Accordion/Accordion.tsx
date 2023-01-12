import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed:boolean
    onChange: ()=>void
}

type AccordionTitlePropsType = {
    title: string
    onChange:()=>void

}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}
function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

const AccordionTitleContainerComponent = React.memo(AccordionTitle)
const AccordionBodyContainerComponent = React.memo(AccordionBody)

function Accordion2(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitleContainerComponent title={props.titleValue} onChange={props.onChange} />
            {!props.collapsed && <AccordionBodyContainerComponent />}
        </div>
    )
}

export default Accordion2;




