import {useState} from "react";
import {Link} from "react-router-dom";
import ecopocoTail from "../../assets/images/ecopoco_pile-removebg.png";
import './skinSell.css';
import {Button, Spinner, Tooltip} from "reactstrap";
import StoneImg from "../../assets/images/stone.png";
import CopperImg from "../../assets/images/copper.png";
import SilverImg from "../../assets/images/silver.png";
import GoldImg from "../../assets/images/gold.png";
import DiamondImg from "../../assets/images/diamond.png";
import {useAuth} from "../../AuthProvider.jsx";


/**
 * SkinBuy component renders a card for purchasing a skin item. It displays skin details,
 * including the seller, price, rarity, and provides functionality for authenticated users to
 * buy the skin. The component includes loading states, tooltips, and alerts for interaction feedback.
 *
 * @component
 * @param {Object} item - The skin item to be displayed and purchased.
 * @param {Object} item.skin - The details of the skin, including image and name.
 * @param {number} item.rarity - The rarity level of the skin (0: None, 1: Common, 2: Rare, 3: Epic, 4: Legendary).
 * @param {Object} item.user_seller - The seller of the skin.
 * @param {string} item.user_seller.name - The name of the skin's seller.
 * @param {Object} item.skin_sale - The sale details of the skin.
 * @param {number} item.skin_sale.price_without_commission - The base price of the skin.
 * @param {number} item.skin_sale.fee - The fee percentage applied to the base price.
 * @param {string} item.skin_sale.id - The unique identifier for the skin sale.
 * @returns {JSX.Element} - The rendered skin buy card component.
 */
const SkinBuy = ({item}) => {
    const price = item.skin_sale.price_without_commission + (item.skin_sale.price_without_commission * item.skin_sale.fee / 100);
    const [buttonIsLoading, setButtonIsLoading] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
    const [alertIsOpen, setAlertIsOpen] = useState(false)
    const [alertColor, setAlertColor] = useState("light")
    const [alertText, setAlertText] = useState("")
    const buySkinUrl = import.meta.env.VITE_SALE_SKIN_URL // same url than sell because it's juste and edit of property object
    const auth = useAuth();
    const currentUser = auth.user

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
    const buyBtnId = `buy-btn-${item?.id}`;
    const rarityIconId = `rarity-icon-${item?.id}`;


    /**
     * Handles the purchase of a skin by sending a POST request to the server.
     * Updates the UI based on the success or failure of the purchase.
     */
    const buySkin = async () => {
        setButtonIsLoading(true);
        const skinSaleId = item.skin_sale.id;
        const skinSales = {
            skin_sale_id: skinSaleId,
            user_buyer_id: currentUser.uid,
        };

        console.log('Starting buySkin process:', skinSales);

        try {
            const response = await fetch(`${buySkinUrl}/${skinSaleId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(skinSales),
            });

            console.log('Response received:', response);

            if (!response.ok) {
                console.error('Error response from server:', response);
                const errorData = await response.json();
                console.log('Error data:', errorData);
                setButtonIsLoading(false);
                setAlertIsOpen(true);
                setAlertColor("danger");
                setAlertText(errorData.error || 'An error occurred');
                return;
            }

            const data = await response.json();
            console.log('Data received:', data);

            if (data.error) {
                console.error('Error in data:', data.error);
                setButtonIsLoading(false);
                setAlertIsOpen(true);
                setAlertColor("danger");
                setAlertText(data.error);
            } else {
                console.log('Purchase successful:', data);
                setButtonIsLoading(false);
                setAlertIsOpen(true);
                setAlertColor("light");
                setAlertText("Le skin est mis en vente !");
            }
        } catch (error) {
            console.error('An error occurred during the buySkin process:', error);
            setButtonIsLoading(false);
            setAlertIsOpen(true);
            setAlertColor("danger");
            setAlertText('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="single__skin__card">
            <div className="skin__img">
                <img src={item?.skin?.image} className="w-100" alt="skin img"/>
            </div>
            <div className="skin__content">
                <div>
                    <span>Vendeur</span> : <span>{item?.user_seller?.name}</span>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    {currentUser ? (
                        buttonIsLoading ? (
                            <Button
                                color="primary"
                                disabled
                            >
                                <Spinner size="sm">
                                    Loading...
                                </Spinner>
                                <span>{' '} Achat en cours ...</span>
                            </Button>
                        ) : (
                            <Button
                                id={buyBtnId}
                                size="small"
                                color="primary"
                                className="d-flex align-items-center gap-2"
                                onClick={buySkin}
                            >
                                <i className="ri-shopping-bag-line"></i>
                            </Button>
                        )
                    ) : (
                        <div style={{fontSize: "x-small", fontStyle: "italic"}}>se connecter pour acheter</div>
                    )}

                    <div>
                        Prix {price}
                        <img width={20} src={ecopocoTail} alt="ecopoco-icon"/>
                    </div>
                </div>

                <div className="skin__creator__info-wrapper d-flex gap-3">
                    <div className="skin__creator__info w-100 d-flex align-items-center justify-content-between">
                        <h5 className="skin__title">
                            <Link to={`/marketplace/${item?.user_seller?.name}/${item?.skin?.id}`}>
                                {item?.skin?.name}
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

export default SkinBuy;
