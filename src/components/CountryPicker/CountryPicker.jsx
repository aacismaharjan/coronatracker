import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../../api'

const CountryPicker = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetchCountries()
      if (res) setData(res)
    }
    getData()
  }, [])

  const fetchedCountries = data
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 m-auto'>
          <select
            className='form-control'
            onChange={(e) => props.handleCountryChange(e.target.value)}
          >
            <option value=''>Global</option>
            {fetchedCountries.map((country, i) => {
              return (
                <option key={i} value={country}>
                  {country}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CountryPicker
