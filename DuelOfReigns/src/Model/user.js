const createUser = (user) => {
    return firestore.collection('users').doc(user.id).set(user);
};

export { createUser };
