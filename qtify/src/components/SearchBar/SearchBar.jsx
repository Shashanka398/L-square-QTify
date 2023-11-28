import React from 'react'
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg"
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  return (
    <form className={styles.wrapper}>
        <input className={styles.search} placeholder="search" required/>
        <button className={styles.searchButton} type='search'  >
            <SearchIcon/>
        </button>
    </form>
  )
}

export default SearchBar