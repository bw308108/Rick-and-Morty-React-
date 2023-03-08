import React, { useEffect, useState } from 'react'
import CharactersC from '../CharactersC/CharactersC'
import SearchBar from '../SearchBar/SearchBar'
import './APIRequest.css'


 const APIRequest = ({ info }) => {
    const [ characters, setCharacters ] = useState([])
    const [ name, setName ] = useState('')


useEffect(() => {
const fetchData = async () => {
const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
const data = await response.json()
console.log(data.results)
setCharacters(data.results)
}
 fetchData()
 }, [ name ])


  return (
    <div className='cards'>
        <h1 className='title1'>Rick and Morty </h1>
        <br/>
        <SearchBar getSearch={(search) => setName(search) } />
        <br/>
        <CharactersC characters={characters} />

    </div>
  )
}

export default APIRequest
