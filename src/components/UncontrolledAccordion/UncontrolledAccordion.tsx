import React, {useState} from "react";

type UncontrolledAccordionType = {
    titleValue:string
}
type AccordionTitlePropsType = {
    title: string
    value:boolean
    setCollapsed:(collapsed:boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.setCollapsed(!props.value)}} >{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
const AccordionTitleContainerComponent = React.memo(AccordionTitle)
const AccordionBodyContainerComponent = React.memo(AccordionBody)

function UncontrolledAccordion(props:UncontrolledAccordionType) {
    let [collapsed,setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitleContainerComponent title={props.titleValue} setCollapsed={setCollapsed} value={collapsed}/>
            {!collapsed && <AccordionBodyContainerComponent/>}
        </div>
    )
}
export default UncontrolledAccordion;




