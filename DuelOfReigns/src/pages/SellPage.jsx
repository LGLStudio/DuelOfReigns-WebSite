import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import {useAuth} from "../AuthProvider.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Skin from "../components/Skin/Skin.jsx";
import SkinSell from "../components/SkinSell/SkinSell.jsx";

const SellPage = () => {
    const auth = useAuth();
    const skins = auth.user.skins

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
                {skins.map(skin => (
                    <div style={{
                        width: "200px",
                        margin: "1rem"
                    }}
                         key={Math.random()}
                    >
                        <Skin item={skin}/>
                    </div>
                ))}
            </div>
        </>
    )
};

export default SellPage;