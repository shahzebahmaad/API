import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function CountryDiv(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        console.log(res)
        setCountry(res.data.data)
      }
      )
  }, []);

  return (

    <div className='ChildDiv' style={props.style}>

      <label>Countries</label>

      <select id='cars' value={props.value} onChange={(event) => { props.callbackMethod(event.target.value) }}>

        <option>Select Country</option>

        {
          country.map((con, id) => {

            return (
              <option key={id} value={con.id}>{con.country}</option>
            )
          })

        }

      </select>
    </div>

  )
}
