import React, { Component } from 'react';
import './App.css'
import NavBar from "./components/NavBar"
import Cards from "./components/Cards/Cards"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import Charts from "./components/Charts/Charts"
import Footer from "./components/Footer"
import { fetchData } from "./api"
import Particles from "react-particles-js"

class App extends Component {
  state = {
    data: {},
    country: "",
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <Particles className="effects" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;