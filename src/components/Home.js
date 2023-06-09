import React from "react";
import Navbar from "./NavBar";
import HeroSection from "./HeroSection";
import ConditionsSection from "./ConditionsSection";
import ArticlesSection from "../ArticlesSection";
import MentalQuestions from "../MentalQuestions";
import Footer from "./Footer";


import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  background-color: #5ce0d8;
  color: #fff;
  border-radius: 50%;
  font-size: 60px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ConditionsSection />
      <ArticlesSection />
      <MentalQuestions />
      <StyledButton to="/QuoteGenerator">
        <span style={{ fontSize: "1.5rem" }}>Get Quote</span>
      </StyledButton>
      <Footer />
    </>
   
  );
};

export default Home;
