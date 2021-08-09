import './Home.scss'
import React from "react"
import Search from '../../components/Search/Search'
import DefaultCities from '../../components/DefaultCities/DefaultCities'

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Search />
      <DefaultCities />
    </div>
  )
}

export default Home