import React from "react";
import HeroSection from "../components/UI/HeroSection/HeroSection";
import LibraryFaction from "../components/UI/LibraryFaction/LibraryFaction";
import RankSection from "../components/UI/RankSection/RankSection";
import NewsSection from "../components/UI/NewsSection/NewsSection";

const HomePage = () => {
    return <>
        <HeroSection/>
        <LibraryFaction/>
        <RankSection/>
        <NewsSection />
    </>
};

export default HomePage;