import React, { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Charts from './components/Charts/Charts'
import Footer from './components/Footer'
import { fetchData } from './api'
import Particles from 'react-particles-js'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData()
      if (res) {
        setData(res)
        setLoading(false)
      }
    }

    getData()
  }, [])

  const handleCountryChange = async (country) => {
    setLoading(true)
    const fetchedData = await fetchData(country)
    if (fetchedData) {
      setData(fetchedData)
      setCountry(country)
      setLoading(false)
    }
  }

  return (
    !loading && (
      <React.Fragment>
        <NavBar />
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Charts data={data} country={country} />
        <Particles className='effects' />
        <Footer />
      </React.Fragment>
    )
  )
}

export default App
