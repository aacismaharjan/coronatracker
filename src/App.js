import React, { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Charts from './components/Charts/Charts'
import Footer from './components/Footer'
import { fetchData } from './api'

const App = () => {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData()
      if (res) {
        setData(res)
      }
    }
    getData()
  }, [])

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    if (fetchedData) {
      setData(fetchedData)
      setCountry(country)
    }
  }

  return (
    <React.Fragment>
      <NavBar />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
      <Footer />
    </React.Fragment>
  )
}

export default App
