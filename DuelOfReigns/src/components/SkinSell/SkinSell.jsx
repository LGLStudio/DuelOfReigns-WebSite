import React, {useState} from "react";
import {Alert, Button, Form, Input, Modal, ModalBody, ModalFooter, ModalHeader, Spinner, Tooltip} from "reactstrap";
import ecopocoTail from "../../assets/images/ecopoco_pile-removebg.png";
import StoneImg from "../../assets/images/stone.png"
import CopperImg from "../../assets/images/copper.png"
import SilverImg from "../../assets/images/silver.png"
import GoldImg from "../../assets/images/gold.png"
import DiamondImg from "../../assets/images/diamond.png"
import {useAuth} from "../../AuthProvider.jsx";

/**
 * SkinSell component renders a card for selling a skin item. It provides a form for the user to
 * set a price, view the fees, and confirm the sale of the skin. The component includes a modal for
 * confirming the sale, loading states, tooltips for skin rarity, and alerts for feedback on the sale process.
 *
 * @component
 * @param {Object} item - The skin item to be displayed and sold.
 * @param {string} item.image - The URL of the skin's image.
 * @param {string} item.name - The name of the skin.
 * @param {number} item.rarity - The rarity level of the skin (0: None, 1: Common, 2: Rare, 3: Epic, 4: Legendary).
 * @param {string} item.skinId - The unique identifier of the skin.
 * @param {string} item.skinPropertyId - The unique identifier of the skin's properties.
 * @returns {JSX.Element} - The rendered skin sell card component.
 */
const SkinSell = ({item}) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [inputReceive, setInputReceive] = useState(0);
    const [inputPrice, setInputPrice] = useState(1);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [buttonIsLoading, setButtonIsLoading] = useState(false);
    const receiveInputId = "input-receive";
    const priceInputId = "input-price"
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const toggleModal = () => setModal(!modal);
    const auth = useAuth();
    const currentUser = auth.user
    const saleSkinUrl = import.meta.env.VITE_SALE_SKIN_URL
    const [alertIsOpen, setAlertIsOpen] = useState(false)
    const [alertColor, setAlertColor] = useState("light")
    const [alertText, setAlertText] = useState("")

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

    /**
     * Handles input changes for setting the price and calculating the expected receive amount.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} ev - The input change event.
     */
    const determinePrices = (ev) => {
        const target = ev.target
        const targetId = target.id
        const value = parseInt(ev.target.value);

        if (targetId === receiveInputId) {
            setInputReceive(value);
            setInputPrice((value + (value * 0.1)));
        } else if (targetId === priceInputId) {
            setInputPrice(value);
            setInputReceive(value - (value * 0.1));
        }
    }

    /**
     * Creates a sale for the skin by sending the sale data to the server.
     * Updates the UI based on the success or failure of the sale.
     */
    const createSellSkin = async () => {
        setButtonIsLoading(true);

        const skinSales = {
            skin_property_id: item.skinPropertyId, // ref document skin_properties
            user_seller: currentUser.uid, // ref document users
            price_without_commission: inputReceive,
            fee: 10,
            date_on_sale: new Date(),
        }

        const response = await fetch(`${saleSkinUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(skinSales),
        });

        const data = await response.json();

        if (data.error) {
            setButtonIsLoading(false);
            setAlertIsOpen(true)
            setAlertColor("danger")
            setAlertText(data.error)
        } else {
            setButtonIsLoading(false);
            setAlertIsOpen(true)
            setAlertColor("light")
            setAlertText("Le skin est mis en vente !")
        }
        toggleModal()
    }


    return (
        <>
            <Alert color={alertColor} isOpen={alertIsOpen}
                   toggle={() => setAlertIsOpen(false)}
            >
                {alertText}
            </Alert>
            <div className="single__skin__card">
                <div className="skin__img">
                    <img src={item?.image} className="w-100" alt={"skin img"}/>
                </div>
                <div className="skin__content">
                    <div className="skin__creator__info-wrapper d-flex gap-3">
                        <div className="skin__creator__info w-100 d-flex align-items-center justify-content-between">
                            <h5 className="skin__title">
                                {item?.name}
                            </h5>
                            <img id={`rarity-icon-${item.id}`} width={50} src={rarityInfo.img} alt="logo rarity"/>
                            <Tooltip
                                isOpen={tooltipOpen}
                                target={`rarity-icon-${item.id}`}
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
                        onClick={toggleModal}
                    >
                        Vendre
                    </Button>
                </div>
            </div>

            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader
                    toggle={toggleModal}
                >
                    Mettre un item en vente
                </ModalHeader>
                <ModalBody>
                    <div style={{fontWeight: "bold", fontSize: "x-large"}}>{item?.name}</div>
                    <Form>
                        <div>

                            <div className="mb-3">
                                <label
                                    htmlFor={receiveInputId}
                                    className="form-label"
                                >
                                    Vous recevrez <img width={20} src={ecopocoTail} alt="ecopoco-icon"/>
                                </label>
                                <Input
                                    type="number"
                                    min={0}
                                    className="form-control"
                                    id={receiveInputId}
                                    placeholder="ecopocos"
                                    value={inputReceive}
                                    onChange={(ev) => determinePrices(ev)}
                                />
                                <label
                                    htmlFor={priceInputId}
                                    className="form-label"
                                >
                                    Prix sur le marché (frais inclus) <img width={20} src={ecopocoTail}
                                                                           alt="ecopoco-icon"/>
                                </label>
                                <Input
                                    min={1}
                                    type="number"
                                    className="form-control"
                                    id={priceInputId}
                                    placeholder="ecopocos"
                                    value={inputPrice}
                                    onChange={(ev) => determinePrices(ev)}
                                />
                            </div>
                        </div>
                        <div style={{marginTop: "1rem"}}>
                            <Input
                                type={"checkbox"}
                                onChange={(ev) => setDisabled(!ev.target.checked)}
                                style={{marginRight: "0.25rem"}}
                                // value={(ev) => setCheckboxValue(ev.target.checked)}
                            />
                            <span>
                                J'accepte les termes de l'Accord de souscription LGL STUDIO (dernière mise à jour le 01
                                juillet 2024).
                            </span>
                        </div>
                    </Form>
                    <div style={{fontStyle: "italic", fontSize: "small", fontWeight: "lighter", marginTop: "1rem"}}>
                        Vous acceptez qu'une fois la vente effectuée, l'acheteur bénéficie d'un accès instantané au
                        contenu numérique et vous renoncez à toute possibilité d'annulation de la vente qui sera alors
                        finalisée.
                    </div>
                </ModalBody>
                <ModalFooter>
                    {buttonIsLoading ?
                        <Button
                            color="primary"
                            disabled
                        >
                            <Spinner size="sm">
                                Loading...
                            </Spinner>
                            <span>
                                {' '} Enregistrement de la vente ...
                            </span>
                        </Button>
                        :
                        <Button
                            color="primary"
                            onClick={createSellSkin}
                            disabled={disabled}
                        >
                            Oui, mettre cet article en vente
                        </Button>
                    }
                    {' '}
                    <Button color="secondary" onClick={toggleModal}>
                        Non ! je le garde pour moi !
                    </Button>
                </ModalFooter>
            </Modal>

        </>)
};

export default SkinSell;