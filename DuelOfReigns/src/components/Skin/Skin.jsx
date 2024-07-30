import React, {useState} from "react";
import {Button, Tooltip} from "reactstrap";
import StoneImg from "../../assets/images/stone.png"
import CopperImg from "../../assets/images/copper.png"
import SilverImg from "../../assets/images/silver.png"
import GoldImg from "../../assets/images/gold.png"
import DiamondImg from "../../assets/images/diamond.png"

const Skin = ({item}) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const convertRarityIntoImage = (rarity) => {
        switch (rarity) {
            case 0:
                return {img: StoneImg, text: "None"};
            case 1:
                return {img: CopperImg, text: "Commune"}
            case 2:
                return {img: SilverImg, text: "Rare"}
            case 3:
                return {img: GoldImg, text: "Epique"}
            case 4:
                return {img: DiamondImg, text: "Légendaire"}
            default:
                return {img: StoneImg, text: "Unknown"};
        }
    }

    const rarityInfo = convertRarityIntoImage(item?.rarity);

    return <div className="single__skin__card">
        <div className="skin__img">
            <img src={item?.image} className="w-100" alt={"skin img"}/>
        </div>
        <div className="skin__content">
            <div className="skin__creator__info-wrapper d-flex gap-3">
                <div className="skin__creator__info w-100 d-flex align-items-center justify-content-between">

                    <h5 className="skin__title">
                        {item?.name}
                    </h5>
                    <img id="rarity-icon" width={50} src={rarityInfo.img} alt="logo rarity"/>
                    <Tooltip
                        isOpen={tooltipOpen}
                        target="rarity-icon"
                        toggle={toggle}
                    >
                        {rarityInfo.text}
                    </Tooltip>
                </div>
            </div>
            <Button
                size="small"
                color="primary"
                className="d-flex align-items-center gap-2"
            >
                Vendre
            </Button>
        </div>
    </div>
};

export default Skin;