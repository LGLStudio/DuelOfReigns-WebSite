import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Tooltip} from "reactstrap";
import StoneImg from "../../assets/images/stone.png";
import CopperImg from "../../assets/images/copper.png";
import SilverImg from "../../assets/images/silver.png";
import GoldImg from "../../assets/images/gold.png";
import DiamondImg from "../../assets/images/diamond.png";

/**
 * Skin component renders a single skin card with details about the skin, including
 * the seller, the skin's image, and its rarity. It includes a tooltip that displays
 * the rarity level of the skin when hovering over the rarity icon.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.item - The skin item to be displayed.
 * @returns {JSX.Element} - The rendered skin card component.
 */
const Skin = ({item}) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    /**
     * Converts the rarity level into corresponding image and text descriptions.
     *
     * @param {number} rarity - The rarity level of the skin.
     * @returns {Object} - An object containing the image and text description of the rarity.
     */
    const convertRarityIntoImage = (rarity) => {
        switch (rarity) {
            case 0:
                return {img: StoneImg, text: "None"};
            case 1:
                return {img: CopperImg, text: "Commune"};
            case 2:
                return {img: SilverImg, text: "Rare"};
            case 3:
                return {img: GoldImg, text: "Epique"};
            case 4:
                return {img: DiamondImg, text: "Légendaire"};
            default:
                return {img: StoneImg, text: "Unknown"};
        }
    };

    const rarityInfo = convertRarityIntoImage(item?.rarity);
    const rarityIconId = `rarity-icon-${item?.id}`;

    return (
        <div className="single__skin__card">
            <div className="skin__img">
                <img src={item?.image} className="w-100" alt="skin img"/>
            </div>
            <div className="skin__content">
                <div>
                    <span>Vendeur</span> : <span>{item?.user_seller?.name}</span>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                </div>

                <div className="skin__creator__info-wrapper d-flex gap-3">
                    <div className="skin__creator__info w-100 d-flex align-items-center justify-content-between">
                        <h5 className="skin__title">
                            <Link to={`/marketplace/${item?.user_seller?.name}/${item?.id}`}>
                                {item?.name}
                            </Link>
                        </h5>
                        <img id={rarityIconId} width={50} src={rarityInfo?.img} alt="logo rarity"/>
                        <Tooltip isOpen={tooltipOpen} target={rarityIconId} toggle={toggleTooltip}>
                            {rarityInfo?.text}
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skin;
