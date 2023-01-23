import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function StateDiv(props) {

    const [sta, setStateValue] = useState([])

    useEffect(() => {
        axios.post("https://countriesnow.space/api/v0.1/countries/states", {
            "country": props.value
        }).then((res) => {
            setStateValue(res.data.data.states)
        }
        )
    }, [props.value])

    return (

        <div className='ChildDiv' id='ChildDiv2'>

            <label for="cars">State</label>

            <select id="cars" value={props.values} onChange={(event) => { props.callbackMethods(event.target.value) }} >

                <option value="volvo">Select State</option>
                {
                    sta.map((sta, id) => {

                        return (
                            <option key={id} value={sta.name} >{sta.name}</option>
                        )
                    })

                }

            </select>
        </div>

    )
}
