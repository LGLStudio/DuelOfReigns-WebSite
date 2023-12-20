import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import HeroSection from "../components/UI/HeroSection/HeroSection.jsx";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            button: {
                download: "Download",
                login: "Login",
                logout: "Logout",
                registration: "Registration",
                buy: "Buy",
            },
            home: {
                HeroSection: {
                    title: "Duel of Reigns",
                    paragraph: {
                        part_1: "Immerse yourself in the world of",
                        part_2: "a strategic card game set in the heart of a heroic-fantasy world. Weave strategic alliances between factions, thus consolidating your power, in order to impose your unwavering reign!",
                    },
                }
            }
        }
    },
    fr: {
        translation: {
            button: {
                download: "Télécharger",
                login: "Se connecter",
                logout: "Se déconnecter",
                registration: "S'enregistrer",
                buy: "Acheter",
            },
            home: {
                HeroSection: {
                    title: "Duel of Reigns",
                    paragraph: {
                        part_1: "Plongez dans l'univers de",
                        part_2: "un jeu de cartes stratégique établi au cœur d'un monde héroïque-fantaisie. Tissez des alliances stratégiques entre factions, consolidant ainsi votre pouvoir, afin d'imposer votre règne indéfectible !",
                    },
                }
            }
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    }).then(r => console.log("r", r));

export default i18n;