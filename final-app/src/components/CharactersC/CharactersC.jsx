import React from 'react'
import Description from '../Description/Description'
import './CharactersC.css'


const CharactersC = ({ characters }) => {
  return (
    <>
              {characters.map((info) => {
   return (
       <Description info={info} className="cards">
       </Description>
   )
})}
    </>
  )
}

export default CharactersC