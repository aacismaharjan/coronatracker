import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Charts from './components/Charts/Charts'
import Footer from './components/Footer'
import { fetchData } from './api'
import Particles from 'react-particles-js'

class App extends Component {
  state = {
    data: {},
    country: '',
    loading: true,
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    if (fetchedData) this.setState({ data: fetchedData, loading: false })
  }

  handleCountryChange = async (country) => {
    this.setState({ loading: true })
    const fetchedData = await fetchData(country)
    if (fetchedData)
      this.setState({ data: fetchedData, country: country, loading: false })
  }

  render() {
    const { data, country, loading } = this.state
    return (
      !loading && (
        <React.Fragment>
          <NavBar />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Charts data={data} country={country} />
          <Particles className='effects' />
          <Footer />
        </React.Fragment>
      )
    )
  }
}

export default App
