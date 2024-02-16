import React from "react";

import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from "../pages/HomePage";
import LibraryPage from "../pages/LibraryPage";
import CardDetailsPage from "../pages/CardDetailsPage";
import TutorialPage from "../pages/TutorialPage";
import MarketPage from "../pages/MarketPage";
import MarketDetailsPage from "../pages/MarketDetailsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";

const Routers = () => {
    return (

        <Routes>
            <Route path="/" element={<Navigate to = '/home'/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/library" element={<LibraryPage/>}/>
            <Route path="/library/:id" element={<CardDetailsPage/>}/>
            <Route path="/tutorial" element={<TutorialPage/>}/>
            <Route path="/market" element={<MarketPage/>}/>
            <Route path="/market/:id" element={<MarketDetailsPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    )
};

export default Routers