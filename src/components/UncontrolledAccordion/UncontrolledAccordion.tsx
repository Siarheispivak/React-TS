import React, {useState} from "react";

type UncontrolledAccordionType = {
    titleValue:string
}


function UncontrolledAccordion(props:UncontrolledAccordionType) {
    let [collapsed,setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} value={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

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
    // console.log("UncontrolledAccordion BODY")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;




