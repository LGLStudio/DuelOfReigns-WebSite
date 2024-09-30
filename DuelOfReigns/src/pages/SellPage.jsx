import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import {useAuth} from "../AuthProvider.jsx";
import SkinSell from "../components/SkinSell/SkinSell.jsx";
import {t} from "i18next";

const SellPage = () => {
    const auth = useAuth();
    const skins = auth.user.skins
    const skinsOnSell = []
    const skinsNotOnSell = []
    skins.forEach(skin => {
        if (skin.skinIsOnSale) {
            skinsOnSell.push(skin);
        } else {
            skinsNotOnSell.push(skin);
        }
    })
    return (
        <>
            <BlockHeader/>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div>
                    {t("Sélectionnez un item dans votre inventaire")}
                </div>
                {/*<div>*/}
                {/*    Vous recherchez un item particulier ?*/}
                {/*    <input placeholder={"Tapez les premières lettres du nom d'un item pour filtrer la liste"}/>*/}
                {/*</div>*/}
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                <div>
                    {t("Skins déjà en vente")}
                    {skinsOnSell.map(skin => (
                        <div style={{
                            width: "200px",
                            margin: "1rem"
                        }}
                             key={Math.random()}
                        >
                            <SkinSell item={skin}/>
                        </div>
                    ))}
                </div>
                {t("Skins pas en vente")}
                {skinsNotOnSell.map(skin => (
                    <div style={{
                        width: "200px",
                        margin: "1rem"
                    }}
                         key={Math.random()}
                    >
                        <SkinSell item={skin}/>
                    </div>
                ))}
            </div>
        </>
    )
};

export default SellPage;
