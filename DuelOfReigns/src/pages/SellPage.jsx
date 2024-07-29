import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import SkinCard from "../components/UI/SkinCard/SkinCard.jsx";
import {useAuth} from "../AuthProvider.jsx";
import {Button} from "reactstrap";
import {useNavigate} from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import {useEffect} from "react";

const SellPage = () => {
    const auth = useAuth();
    const fakeItems = []
    const navigate = useNavigate();
    console.log(auth.user)


    const getSkins = async () => {
        // Récupération des skins depuis Firestore
        const db = getFirestore();
        const skinDoc = await getDoc(doc(db, 'skins', auth.user.uid));
        if (skinDoc.exists()) {
           console.log("OK !")
        } else {
            console.log("pas ok")
        }
    }

    useEffect(() => {

    }, [])


    return (
        <>
            <BlockHeader/>
            <div>
                Sélectionnez un item dans votre inventaire
            </div>
            <div>
                Vous recherchez un item particulier ?
                <input placeholder={"Tapez les premières lettres du nom d'un item pour filtrer la liste"}/>
            </div>
            <div>

            </div>
        </>
    )
};

export default SellPage;