import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import Select from "./components/Select/Select";
import Accordion2 from "./components/Accordion/Accordion";

function App() {

    let [ratingValue,setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn,setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            {/*<PageTitle title={"Title rendering"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}

            {/*<Accordion2 titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} />*/}
            {/*<Accordion2 titleValue={'Users'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} />*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}

            {/*<OnOff onClick={setOnOffValue} value={onOffValue}/>*/}
            {/*<OnOff on={switchOn} onClick={setSwitchOn} />*/}
            {/*<UncontrolledOnOff  onChange={setSwitchOn}/>{switchOn.toString()}*/}

            <Select collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} items = {[
                {title:'Dimych',value:1},
                {title:'Viktor',value:2},
                {title:'Sergey',value:3},
                {title:'Evgenij',value:4}
            ]} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    // console.log("Title rendering")
    return <h1>{props.title}</h1>
}



export default App;
