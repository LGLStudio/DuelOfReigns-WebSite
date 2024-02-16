/**
 * Renders the PrivacyAndTerms page
 *
 * @return {JSX.Element} The rendered PrivacyAndTerms page
 */
import {WEBSITE_URL} from "../utils/misc.js";
import {Nav, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

const PrivacyAndTerms = () => {
    return (
        <div className="privacy-and-terms">
            <h1>Politique de confidentialité</h1>
            <p>Dernière mise à jour : 21 juin 2023</p>
            <p>
                Cette politique de confidentialité s'applique aux informations que nous
                collectons à propos de vous lorsque vous utilisez notre site web{" "}
                <NavLink
                    active
                    to={WEBSITE_URL}>
                    Duel of Reigns
                </NavLink>
                .
            </p>
            <h2>1. Informations que nous collectons</h2>
            <p>
                Nous collectons uniquement les informations nécessaires pour vous
                fournir le service. Cela inclut votre adresse e-mail pour l'inscription
                et des informations de base sur votre système d'exploitation et matériel
                pour s'assurer que notre launcher fonctionne correctement.
            </p>

            <h2>2. Comment nous utilisons les informations</h2>
            <p>
                Nous utilisons ces informations pour fournir, maintenir, améliorer et
                personnaliser nos services et développer de nouveaux. Nous ne
                partagerons jamais vos informations personnelles avec des tiers sans
                votre permission explicite.
            </p>

            <h2>3. Sécurité des informations</h2>
            <p>
                Nous prenons la sécurité de vos informations très au sérieux. Nous
                utilisons des pratiques standard de l'industrie pour protéger les
                informations que vous nous fournissez contre l'accès non autorisé, la
                perte, la manipulation, la falsification ou la destruction.
            </p>

            <h2>4. Vos droits</h2>
            <p>
                Vous avez le droit d'accéder à vos informations, de les mettre à jour,
                de les corriger et de demander leur suppression. Vous pouvez également
                vous opposer à leur traitement ou demander leur limitation. Pour exercer
                ces droits, contactez-nous à l'adresse suivante :
                support@[votresite].com.
            </p>

            <h1>Conditions d'utilisation</h1>
            <p>Dernière mise à jour : 21 juin 2023</p>

            <h2>1. Utilisation appropriée</h2>
            <p>
                Vous vous engagez à utiliser notre site et notre launcher de manière
                responsable et légale. Tout abus, tel que l'envoi de spam, la tentative
                de piratage ou l'utilisation abusive du service, entraînera
                l'interdiction de votre compte.
            </p>

            <h2>2. Contenu</h2>
            <p>
                Tous les éléments de notre site et de notre launcher, y compris les
                textes, les graphiques, le code source, les logiciels, sont notre
                propriété exclusive et sont protégés par les lois sur le droit d'auteur.
                Vous vous engagez à ne pas copier, modifier, distribuer ou vendre ces
                éléments sans notre permission écrite.
            </p>

            <h2>3. Limitation de responsabilité</h2>
            <p>
                Nous ne sommes pas responsables des dommages indirects, spéciaux,
                consécutifs ou punitifs (y compris la perte de profits) découlant de
                votre utilisation de notre site ou de notre launcher, même si nous avons
                été informés de la possibilité de tels dommages.
            </p>
            <h2>4. Modifications </h2>
        </div>
    );
};

export default PrivacyAndTerms;
