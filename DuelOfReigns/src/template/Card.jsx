<div className="single__hero__card">
    <div className="card__img">
        <img src={demonImg} className="w-100"/>
    </div>
    <div className="card__content">
        <h5 className="card__title">Hérétique</h5>

        <div className="creator__info-wrapper d-flex gap-3">
            <div className="creator__img">
                <img src={demonImg} className="w-100"/>
            </div>
            
            <div className="creator__info w-100 d-flex align-items-center justify-content-between">
                <div>
                    <h6>Created by</h6>
                    <p>Test Test</p>
                </div>

                <div>
                    <h6>Prix</h6>
                    <p>12€</p>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
            <Button className="buy__btn d-flex align-items-center gap-2">
                <i className="ri-shopping-bag-line"></i>
                Acheter
            </Button>
            <span>
                <Link to="#">Voir Historique</Link>
            </span>
        </div>
    </div>
</div>