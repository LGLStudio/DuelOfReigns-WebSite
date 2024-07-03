const addSkin = (skin) => {
    return firestore.collection('skins').add(skin);
};

export { addSkin };