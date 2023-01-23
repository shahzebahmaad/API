import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CityDiv(props) {
    const [city, setCity] = useState([])

    useEffect(() => {
        axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
            "country": props.value,
            "state": props.values
        }).then((res) => {
            console.log(res.data.data)
            setCity(res.data.data)
        }
        )
    }, [props.value,props.values])
    return (
        
        <div className='ChildDiv' id='ChildDiv3'>

            <label for="cars">Cities</label>

            <select name="cars" id="cars">

                <option value="volvo">Select City</option>
                
                {
                    city.map((cities, id) => {

                        return (
                            <option key={id} value={cities.index} >{cities}</option>
                        )
                    })

                }

            </select>

        </div>
        
    )
}
