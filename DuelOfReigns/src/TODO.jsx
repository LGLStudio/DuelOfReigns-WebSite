const TODO = () => {
    return (<>
        1) Lucas achète un skin sur la boutique
        - vérifier qu'on écrit bien toutes les données nécessaire en base de données

        2) Lucas mets en vente un skin sur le market place
        b) récupérer tous les skins_sales de Lucas
        - lister tous les skin_sales pour séparer les skins en ventes des skins pas en ventes
        c) mettre en vente un skin
        - créer une entrée sale_skin avec les infos nécessaires
        - actualiser la page pour re-lister les skins en vente


        3) Louis achète le skin sur le market place
        - Vérification du nombre d'écopoco que Louis possède
        - Débite les Ecopoco de Louis de (Skin_Sale.price + Skin_Sale.price*Skin_Sale.Fee)
        - Crédite les Ecopoco de Lucas de Skin_Sale.price
        - Edite Skin_Sale :
        - Ajoute l'entrée User_Buyer
        - Ajoute l'entrée Date_Transaction
        - Edite le skin dont Skin.id === Skin_Sale.Skin
        - change le Owner


        // envoie de l'uid du user + le sell_skin_id a un endpoint du backend
        // backend demande à firestore les coins de user et recup de sell_skin
        //      déduction du propiétaire de sell_skin
        // backend transfert les coins
        // backend transfert skin
        // backend modifie le sell_skin



        /!\ ! COMPRESSER LES IMAGES ! /!\
        /!\ ! BUG A L'INSCRIPTION l'utilisateur ne peut pas créer dans la table user ! /!\
    </>)
}

export default TODO