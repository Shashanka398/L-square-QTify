// import { Logo, Modals, Search1, SearchBar } from '../../components';
import React from 'react';
import Logo from "../Logo/Logo"
import SearchBar  from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from  './NavBar.module.css';
import Button from '../Button/Button';

const NavBar = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper}>
        <Link to="/" >
          <Logo />
        </Link>

        </div>
        
        {/* <SearchBar data={data} className="searchbar" /> */}
        <SearchBar data={data} className="searchbar"  placeholder="Search a album of your choice"  />
        <Button text={"Give Feedback"}/>

        {/* <Modals title={'Give Feedback'} /> */}
      </nav>
      {/* <SearchBar className="searchbar-moblie" /> */}
    
    </div>
  );
};

export default NavBar;
