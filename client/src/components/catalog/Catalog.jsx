import { useEffect, useState } from "react";
import Game from "../game-card/GameCard.jsx";
import request from "../../utils/requester.js";

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await request(`games`);
                setGames(Object.values(result));
            } catch (error) {
                alert(error.message)
            }
        })();
    }, [])


    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}

            <div className="catalog-container">
                {games.map(game => <Game key={game._id} {...game} />)}
            </div>
        </section>

    );
}