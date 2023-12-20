import React from "react";
import HeroSection from "../components/UI/HeroSection/HeroSection";
import LibraryFaction from "../components/UI/LibraryFaction/LibraryFaction";
import RankSection from "../components/UI/RankSection/RankSection";
import TrendingSkinSection from "../components/UI/TrendingSkinSection/TrendingSkinSection";
import NewsSection from "../components/UI/NewsSection/NewsSection";

const HomePage = () => {
    return (<>
        <HeroSection/>
        <LibraryFaction/>
        <RankSection/>
        <TrendingSkinSection/>
        <NewsSection/>
    </>)
};

export default HomePage;