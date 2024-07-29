import React from "react";
import {Link} from "react-router-dom";
import skinPlaceholder from '../../../assets/images/boardgame-back.jpg';
import avatarPlaceholder from '../../../assets/images/hero-img.jpg';
import ecopocoTail from "../../../assets/images/ecopoco_pile-removebg.png"
import './SkinCard.css';
import {Button} from "reactstrap";

const SkinCard = ({item}) => {
    const price = item.price_without_commission + (item.price_without_commission * item.fee / 100)

    return <div className="single__skin__card">
        <div className="skin__img">
            {/*<img src={skinPlaceholder} className="w-100" alt={"skin img"}/>*/}
            <img src={item?.skin?.image} className="w-100" alt={"skin img"}/>
        </div>
        <div className="skin__content">
            <h5 className="skin__title">
                <Link to='/marketplace/:userName/:skinId'>
                    {item?.skin?.name}
                </Link>
            </h5>

            <div className="skin__creator__info-wrapper d-flex gap-3">
                {/*<div className="skin__creator__img">*/}
                {/*    <img src={avatarPlaceholder} className="w-100"/>*/}
                {/*</div>*/}

                <div className="skin__creator__info w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <h6>Vendeur</h6>
                        <p>{item?.user_seller?.name}</p>
                    </div>

                    <div>
                        <div>Prix {price}<img width={20} src={ecopocoTail} alt={"ecopoco-icon"}/></div>
                        {/*<p>En vente depuis {item.date_on_sale}</p>*/}
                    </div>
                </div>
            </div>

            <div className="mt-3 d-flex align-items-center justify-content-between">
                <Button
                    color="primary"
                    className="d-flex align-items-center gap-2">
                    <i className="ri-shopping-bag-line"></i>
                    Acheter
                </Button>
                {/*<span className="history__link">*/}
                {/*    <Link to="#">Historique</Link>*/}
                {/*</span>*/}
            </div>
        </div>
    </div>
};

export default SkinCard;