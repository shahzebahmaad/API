import React, { useState } from 'react';
import ChildDiv from "./ChildDiv";
import CountryDiv from "./CountryDiv";
import StateDiv from "./StateDiv";
import CityDiv from "./CityDiv";

export default function Content() {

    const [text, setText] = useState("");
    const [check, setCheck] = useState("");
    const [getcountryvalue, setCountryvalue] = useState('');
    const [sta, setStateValue] = useState('');

    

    return (

        <>
        <div className='ParentDiv'>

            <ChildDiv onChange={(value) => setText(value)} value={text} style={{ backgroundColor: 'black' }} field={true} />
            <ChildDiv onChange={(value) => setText(value)}  value={text} style={{ margin: '170px 0px 0px 147px', backgroundColor: 'blue' }} field={true} />
            <ChildDiv onClick={(checked) => setCheck(checked)} checked={check} style={{ margin: '290px 0px 0px 147px', backgroundColor: 'grey' }} field={false} />

        </div>

            <div className='ParentDiv'>

                <ChildDiv onChange={(value) => setText(value)} value={text} style={{ backgroundColor: 'green' }} field={true} />
                <ChildDiv onChange={(value) => setText(value)} value={text} style={{ margin: '170px 0px 0px 147px', backgroundColor: 'pink' }} field={true} />
                <ChildDiv checked={check} onClick={(checked) => setCheck(checked)} style={{ margin: '300px 0px 0px 147px', backgroundColor: 'red' }} field={false} />

            </div>

            <div className='ParentDiv'>
            

                <CountryDiv callbackMethod={(value) => setCountryvalue(value)} />
                <StateDiv value={getcountryvalue} callbackMethods={(value) => setStateValue(value)} />
                <CityDiv value={getcountryvalue} values={sta}/>

                </div>

            </>

    )
}

