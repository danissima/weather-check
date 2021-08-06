import './Home.scss'
import React from "react"
import Search from '../../components/Search/Search'
import DefaultCities from '../../components/DefaultCities/DefaultCities'
import { apiKey } from '../../assets/ts/apiKey'

const Home: React.FC = () => {
  // let xml = new XMLHttpRequest()
  // xml.open('GET', `https://api.openweathermap.org/data/2.5/weather?lang=ru&q=Ижевск&units=metric&appid=${apiKey}`)
  // xml.responseType = 'json'
  
  // xml.onload = () => {
  //   console.log(xml.response)
  // }
  // xml.send()

  return (
    <div className="Home">
      <Search />
      <DefaultCities />
    </div>
  )
}

export default Home