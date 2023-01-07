import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary, Typography} from "@mui/material";


type ItemType = {
    title: string
    value: any
}
type SelectType = {
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
}

const Select = (props: SelectType) => {

    const [parentValue, setParentValue] = useState('None')
    const [expanded, setExpanded] = useState<boolean>(true)

    return (
        <div>
            {<SelectBody
                title={parentValue}
                items={props.items}
                onChange={props.onChange}
                setParentValue={setParentValue}
                setExpanded={setExpanded}
                expanded={expanded}
            />}
        </div>
    )
};
type SelectBodyType = {
    title: string
    items: ItemType[]
    setParentValue: (newTitle: string) => void
    onChange: () => void
    setExpanded: (expanded: boolean) => void
    expanded: boolean
}
const SelectBody = (props: SelectBodyType) => {
    const options = props.items.map(el => {
        const onDivClick = () => {
            props.setParentValue(el.title)
            props.setExpanded(!props.expanded)
        }
        return (
            <option  onClick={onDivClick} key={el.value}>{el.title}</option>
        )
    })
        const openClose = () => {
            props.setExpanded(!props.expanded)
        }



    return (
            <Accordion  onClick={openClose} expanded={props.expanded}>
                <AccordionSummary>
                    <Typography sx={{width: '33%', flexShrink: 0, color: 'purple'}}>
                        {props.title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {options}
                    </Typography>
                </AccordionDetails>
            </Accordion>
    )
}
export default Select;