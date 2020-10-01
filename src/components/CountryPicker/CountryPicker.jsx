import React, { Component } from 'react'
import { fetchCountries } from '../../api'

class CountryPicker extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const fetchedCountries = await fetchCountries()
    if (fetchedCountries) this.setState({ data: fetchedCountries })
  }

  render() {
    const fetchedCountries = this.state.data
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 m-auto'>
            <select
              className='form-control'
              onChange={(e) => this.props.handleCountryChange(e.target.value)}
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
}

export default CountryPicker
