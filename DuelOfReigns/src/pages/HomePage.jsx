import React from "react";
import HeroSection from "../components/UI/HeroSection/HeroSection";
import LibraryFaction from "../components/UI/LibraryFaction/LibraryFaction";
import RankSection from "../components/UI/RankSection/RankSection";
import TrendingSkinSection from "../components/UI/TrendingSkinSection/TrendingSkinSection";
import NewsSection from "../components/UI/NewsSection/NewsSection";
import {Trans, useTranslation} from "react-i18next";

const HomePage = () => {
    const {t, i18n} = useTranslation();
    return (<>
        <HeroSection/>
        <LibraryFaction/>
        <RankSection/>
        <TrendingSkinSection/>
        <NewsSection/>
    </>)
};

export default HomePage;