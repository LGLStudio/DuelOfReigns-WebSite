const addSkinSale = (skinSale) => {
    return firestore.collection('skin_sales').add(skinSale);
};

export {addSkinSale};