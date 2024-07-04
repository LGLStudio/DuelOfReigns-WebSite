import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import SkinCard from "../components/UI/SkinCard/SkinCard.jsx";
import {useAuth} from "../AuthProvider.jsx";

const MarketPage = () => {
    const auth = useAuth();
    const fakeItems = []
    for (let i = 0; i < 10; i++) {
        fakeItems.push(
            {
                name: `nom_${i + 1}`,
                price: `${i + Math.floor(Math.random() * 10)}`,
                date: `${new Date().toLocaleDateString("fr")}`,
                id: `${i}`
            }
        )
    }
    return (
        <>
            <BlockHeader/>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div>MarketPlace</div>
                <div>Vendre un item</div>
            </div>
            <div>
                {auth?.user ?
                    <>Mes ecopocos : {auth.user.coins} </>
                    : <></>}
            </div>
            Les différents cosmétiques en ventes :
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                {fakeItems.map(item => (
                    <div style={{
                        width: "200px",
                        margin: "1rem"
                    }}
                         key={item.id}
                    >
                        <SkinCard item={item}/>
                    </div>
                ))}
            </div>
        </>
    )
};

export default MarketPage;