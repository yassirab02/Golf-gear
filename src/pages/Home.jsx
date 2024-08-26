import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Customers from "../components/Customers";



const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Title title='Our Products' />
      <Products/>
      <Title title='Customers'/>
      <Customers/>
      <Footer/>
    </>
  );
};

export default Home;
