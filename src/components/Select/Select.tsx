import React, {useState, KeyboardEvent} from 'react';
import Accordion from '@mui/material/Accordion';
import s from './Select.module.scss';
import {AccordionDetails, AccordionSummary, Typography} from "@mui/material";


type ItemType = {
    title: string
    value: any
}
type SelectType = {
    value?: any
    items: Array<ItemType>
}

const Select = (props: SelectType) => {

    const [parentValue, setParentValue] = useState('None')
    const [expanded, setExpanded] = useState<boolean>(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    return (
        <div>
            <SelectBody
                items={props.items}
                title={parentValue}
                setParentValue={setParentValue}
                setExpanded={setExpanded}
                expanded={expanded}
                setHoveredElement={setHoveredElement}
                hoveredElement={hoveredElement}
            />
        </div>
    )
};
type SelectBodyType = {
    title: string
    items: ItemType[]
    setParentValue: (newTitle: string) => void
    setExpanded: (expanded: boolean) => void
    expanded: boolean
    setHoveredElement: (hoveredTitle: string) => void
    hoveredElement: string
}
const SelectBody = (props: SelectBodyType) => {

    const options = props.items.map(el => {
        const onDivClick = () => {
            props.setParentValue(el.title)
            props.setExpanded(!props.expanded)
        }
        return (
            <option
                onMouseEnter={() => {
                    props.setHoveredElement(el.title)
                }}

                className={s.item + " " + (props.hoveredElement === el.title ? s.selected : "")}
                onClick={onDivClick}
                key={el.value}>{el.title}
            </option>
        )
    })
    const openClose = () => {
        props.setExpanded(!props.expanded)
    }
    return (
        <Accordion onClick={openClose} expanded={props.expanded}>
            <AccordionSummary sx={{border: '1px solid blue'}}>
                <Typography sx={{width: '33%', flexShrink: 0, color: 'green'}}>
                    {props.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{border: '1px solid greenyellow'}}>
                <Typography>
                    {options}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
export default Select;