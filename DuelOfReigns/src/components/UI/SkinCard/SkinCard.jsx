import React from "react";
import { Link } from "react-router-dom";

import skinPlaceholder from '../../../assets/images/boardgame-back.jpg';
import avatarPlaceholder from '../../../assets/images/hero-img.jpg';

import './SkinCard.css';
import {Button} from "reactstrap";

const SkinCard = () => {
    return <div className="single__skin__card">
        <div className="skin__img">
            <img src={skinPlaceholder} className="w-100"/>
        </div>
        <div className="skin__content">
            <h5 className="skin__title"><Link to='/marketplace/:userName/:skinId'>Dos : Duel de Règne</Link></h5>

            <div className="skin__creator__info-wrapper d-flex gap-3">
                <div className="skin__creator__img">
                    <img src={avatarPlaceholder} className="w-100"/>
                </div>
                
                <div className="skin__creator__info w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <h6>Vendeur</h6>
                        <p>John Doe</p>
                    </div>

                    <div>
                        <h6>Prix de Revente</h6>
                        <p>10.00€</p>
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
                <span className="history__link">
                    <Link to="#">Historique</Link>
                </span>
            </div>
        </div>
    </div>
};

export default SkinCard;