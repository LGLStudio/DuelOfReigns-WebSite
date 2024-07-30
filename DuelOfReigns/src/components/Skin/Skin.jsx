import React, {useState} from "react";
import {Button, Form, Input, Modal, ModalBody, ModalFooter, ModalHeader, Tooltip} from "reactstrap";
import ecopocoTail from "../../assets/images/ecopoco_pile-removebg.png";
import StoneImg from "../../assets/images/stone.png"
import CopperImg from "../../assets/images/copper.png"
import SilverImg from "../../assets/images/silver.png"
import GoldImg from "../../assets/images/gold.png"
import DiamondImg from "../../assets/images/diamond.png"

const Skin = ({item}) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [inputReceive, setInputReceive] = useState(0);
    const [inputPrice, setInputPrice] = useState(1);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const receiveInputId = "input-receive";
    const priceInputId = "input-price"
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const toggleModal = () => setModal(!modal);
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


    return (
        <>
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
                                value={(ev) => setCheckboxValue(ev.target.checked)}
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
                    <Button
                        color="primary"
                        onClick={toggleModal}
                        disabled={disabled}
                    >
                        Oui, mettre cet article en vente
                    </Button>
                    {' '}
                    <Button color="secondary" onClick={toggleModal}>
                        Non ! je le garde pour moi !
                    </Button>
                </ModalFooter>
            </Modal>

        </>)
};

export default Skin;