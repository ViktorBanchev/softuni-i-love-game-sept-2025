import Game from "../game-card/GameCard.jsx";
import useRequest from "../../hooks/useRequest.js";

export default function Catalog() {
    const { data: games } = useRequest('/data/games', []);

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