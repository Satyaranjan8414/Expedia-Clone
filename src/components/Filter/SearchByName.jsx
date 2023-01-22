import React from 'react'
import Style from "./SearchByName.module.css"
import { SearchIcon } from '@chakra-ui/icons'

const SearchByName = () => {
  return (
    <div>
      <div className={Style.SearchByContainer}>
          <h1 className={Style.SearchHeading}>Search by property name</h1>
          <div className={Style.SearchBox}>
            <SearchIcon/>
            <input type='text' placeholder='  e.g. Pride Hotel' className={Style.SearchInput}></input>
          </div>
    </div>
  </div>
  )
}

export default SearchByName