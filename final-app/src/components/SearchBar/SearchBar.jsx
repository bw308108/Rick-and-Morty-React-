import React from 'react'
import { useState } from 'react'

const SearchBar = ( { getSearch }) => {
    const [ searchString, setSearchString ] = useState('')

    const handleChange = (search) => {
        setSearchString(search)
        getSearch(search)
    }

  return (
    <div>
        <form>
            <input
            type='text'
            className='form-control'
            placeholder='Search Characters'
            value={searchString}
            onChange={(event) => handleChange(event.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchBar