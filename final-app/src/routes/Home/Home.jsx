import React from 'react'
import HomeImageCard from '../../components/HomeImageCard/HomeImageCard'

import './Home.css'


const Home = () => {
  return (
    <div className='App1'>
      <h1 className='title'>The Rick and Morty</h1>
      <h1 className='title'>Support Group</h1>
      <br/>
      <HomeImageCard/>
      <h4 className='footer'>'Welcome to the club, pal' - Rick Sanchez </h4>
    </div>
    
  )
}

export default Home