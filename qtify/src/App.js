
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from "./components/Section/Section";
import "./index.css";

function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);


  useEffect(() => {
    const getAlbum = async () => {
      try {
        const res = await fetch("https://qtify-backend-labs.crio.do/albums/top");
        const data = await res.json();
        setTopAlbum(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAlbum();
  }, []); 
  useEffect(() => {
    const getAlbum = async () => {
      try {
        const res = await fetch("https://qtify-backend-labs.crio.do/albums/new");
        const data = await res.json();
		setNewAlbum(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAlbum();
  }, []); 
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Section title="Top Albums" data={topAlbum} type="album" />
	  <Section title="New Albums" data={newAlbum} type="album" />
    </div>
  );
}


export default App;
