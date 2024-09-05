import './App.css'
import {AuthProvider, useAuth} from "./AuthProvider";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LibraryPage from "./pages/LibraryPage.jsx";
import CardDetailsPage from "./pages/CardDetailsPage.jsx";
import TutorialPage from "./pages/TutorialPage.jsx";
import MarketPage from "./pages/MarketPage.jsx";
import MarketDetailsPage from "./pages/MarketDetailsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PrivacyAndTerms from "./pages/PrivacyAndTerms.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import BankPage from "./pages/BankPage.jsx";
import TODO from "./TODO.jsx";
import SellPage from "./pages/SellPage.jsx";
import InventoryPage from "./pages/InventoryPage.jsx";
import {useEffect} from "react";
import sendMetrics from "./components/Pushgateway/Pushgateway.js";

function App() {
    return (
        <BrowserRouter>
            <RoutesApp/>
        </BrowserRouter>
    );
}

function RoutesApp() {
    // metrics on each page visited
    const location = useLocation();
    useEffect(() => {
        sendMetrics();
    }, [location.pathname]);


    return (
        <AuthProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/library" element={<LibraryPage/>}/>
                <Route path="/library/:id" element={<CardDetailsPage/>}/>
                <Route path="/tutorial" element={<TutorialPage/>}/>
                <Route path="/inventory" element={
                    <RequireAuth>
                        <InventoryPage/>
                    </RequireAuth>
                }/>
                <Route path="/bank" element={
                    <RequireAuth>
                        <BankPage/>
                    </RequireAuth>
                }/>
                <Route path="/sell" element={
                    <RequireAuth>
                        <SellPage/>
                    </RequireAuth>
                }/>
                <Route path="/market" element={<MarketPage/>}/>
                <Route path="/market/:id" element={<MarketDetailsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/privacy-and-terms" element={<PrivacyAndTerms/>}/>
                <Route path="/success" element={<p>Succès !</p>}/>
                <Route path="/cancel" element={<p>cancel !</p>}/>
                <Route path="/todo" element={<TODO/>}/>
                <Route
                    path="/profile"
                    element={
                        <RequireAuth>
                            <ProfilePage/>
                        </RequireAuth>
                    }
                />
            </Routes>
            <Footer/>
        </AuthProvider>
    )
}

/**
 * A component that wraps its children and ensures that the user is authenticated.
 * If the user is not authenticated, redirects to the login page and saves the current location.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The components to render if the user is authenticated.
 * @returns {React.ReactNode} - Returns the children if authenticated, otherwise navigates to the login page.
 */
const RequireAuth = ({children}) => {
    const auth = useAuth(),
        location = useLocation();

    if (!auth?.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, rather than dropping them off on the home page.
        return <Navigate to="/login" state={{from: location}} replace/>;
    }
    return children;
};

export default App
