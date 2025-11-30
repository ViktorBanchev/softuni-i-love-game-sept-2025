import { useState } from "react"

import { Route, Routes } from "react-router"

import Footer from "./components/footer/footer.jsx"
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx"
import GameCreate from "./components/game-create/GameCreate.jsx"
import Register from "./components/register/Register.jsx"
import Login from "./components/login/Login.jsx"
import Logout from "./components/logout/Logout.jsx"
import Edit from "./components/edit/Edit.jsx"
import UserContext from "./contexts/UserContext.js"
import useRequest from "./hooks/useRequest.js"

function App() {
    const [user, setUser] = useState(null);
    const { request } = useRequest();

    const registerHandler = async (email, password) => {
        const newUser = { email, password };

        //TODO: Register API call
        const result = await request('/users/register', 'POST', newUser);
        setUser(result);
    }

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', { email, password });
        setUser(result);
    }

    const logoutHandler = () => {
        return request('/users/logout')
            .finally(() => setUser(null))
    }

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        loginHandler,
        logoutHandler,
        registerHandler,
    }

    return (
        <UserContext.Provider value={userContextValues}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/:gameId/details" element={<Details user={user} />} />
                <Route path="/games/:gameId/edit" element={<Edit />} />
                <Route path="/games/create" element={<GameCreate />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login onLogin={loginHandler} />} />
                <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
            </Routes>

            <Footer />
        </UserContext.Provider>
    )
}

export default App
