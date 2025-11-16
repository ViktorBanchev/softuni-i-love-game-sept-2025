import { Route, Routes } from "react-router"
import Footer from "./components/footer/footer.jsx"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Catalog from "./components/catalog/Catalog.jsx"

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/:gameId/details" element={<h2>Details</h2>} />
            </Routes>
            
            <Footer />
        </>
    )
}

export default App
