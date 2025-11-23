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

function App() {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);

    const registerHandler = (email, password) => {
        if (registeredUsers.some(user => user.email === email)) {
            throw new Error("Email is taken");
        }

        const newUser = { email, password };
        
        setRegisteredUsers(state => [...state, newUser]);
        
        setUser(newUser);

    }

    const loginHandler = (email, password) => {
        const user = registeredUsers.find(u => u.email === email && u.password === password);
        if (!user) {
            throw new Error('Ivalid user or password!');
        }

        setUser(user);
    }

    const logoutHandler = () => {
        setUser(null);
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Catalog />} />
                <Route path="/games/:gameId/details" element={<Details />} />
                <Route path="/games/:gameId/edit" element={<Edit />} />
                <Route path="/games/create" element={<GameCreate />} />
                <Route path="/register" element={<Register onRegister={registerHandler} />} />
                <Route path="/login" element={<Login onLogin={loginHandler} />} />
                <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
