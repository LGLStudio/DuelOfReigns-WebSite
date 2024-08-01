const TODO = () => {
    return (<>
        2) FIXME On mets en vente des skin ! il faut mettre en vente le skin propriété !
        - puis remettre en prod

        3) Louis achète le skin sur le market place
        - Vérification du nombre d'écopoco que Louis possède
        - Débite les Ecopoco de Louis de (Skin_Sale.price + Skin_Sale.price*Skin_Sale.Fee)
        - Crédite les Ecopoco de Lucas de Skin_Sale.price
        - Edite Skin_Sale :
        - Ajoute l'entrée User_Buyer
        - Ajoute l'entrée Date_Transaction
        - Edite le skin dont Skin.id === Skin_Sale.Skin
        - change le Owner

        4) mettre en prod

        // envoie de l'uid du user + le sell_skin_id a un endpoint du backend
        // backend demande à firestore les coins de user et recup de sell_skin
        //      déduction du propiétaire de sell_skin
        // backend transfert les coins
        // backend transfert skin
        // backend modifie le sell_skin

        /!\ ! COMPRESSER LES IMAGES ! /!\
    </>)
}

export default TODO