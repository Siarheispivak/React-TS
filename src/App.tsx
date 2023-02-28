import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff, UncontrolledOnOffContainerComponent} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Select from "./components/Select/Select";
import Accordion2 from "./components/Accordion/Accordion";
import {Example1} from "./components/ReactMemo/ReactMemo";
import {OnOffContainerComponent} from "./components/OnOff/OnOff";
import {DifficultCountingExample, HelpsToReactMemo} from "./components/ReactMemo/UseMemo";
import SelectUseMemo from "./components/Select/SelectUseMemo/SelectUseMemo";
import {HelpsToTownsReactMemo, TownsSecret} from "./components/Select/SelectMemoization/SelectMemoization";




function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

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

            {/*<OnOffContainerComponent onClick={setOnOffValue} value={onOffValue}/>*/}
            {/*<OnOffContainerComponent on={switchOn} onClick={setSwitchOn} />*/}
            {/*<UncontrolledOnOffContainerComponent  onChange={setSwitchOn}/>{switchOn.toString()}*/}


            {/*можно контроллировать от сюда открытие.закрытие селекта*/}
            {/*collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}*/}
            {/*можно контроллировать от сюда открытие.закрытие селекта*/}
            {/*<Select  items = {[*/}
            {/*    {title:'Dimych',value:1},*/}
            {/*    {title:'Viktor',value:2},*/}
            {/*    {title:'Sergey',value:3},*/}
            {/*    {title:'Evgenij',value:4}*/}
            {/*]} />*/}
            {/*<Example1/>*/}
            {/*<DifficultCountingExample/>*/}
            {/*<HelpsToReactMemo/>*/}
            {/*{<SelectUseMemo items={[*/}
            {/*    {title: 'Dimych', value: 1},*/}
            {/*    {title: 'Viktor', value: 2},*/}
            {/*    {title: 'Sergey', value: 3},*/}
            {/*    {title: 'Evgenij', value: 4}*/}
            {/*]}/>}*/}
            {<TownsSecret city={[
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
            ]}/>}
<HelpsToTownsReactMemo/>
            {/*<DifficultCountingExample/>*/}
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
