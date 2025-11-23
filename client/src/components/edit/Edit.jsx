import { useState } from "react";

const initialValues = {
    title: '',
    genre: '',
    players: '',
    date: '',
    imageUrl: '',
    summary: '',
}

export default function Edit() {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setValues(state => ({
            ...state,
            [name]: value
        }))
    };

    return (
        <section id="edit-page">
            <form id="add-new-game">
                <div className="container">
                    <h1>Edit Game</h1>
                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            name="title"
                            onChange={changeHandler}
                            value={values.name}
                            placeholder="Enter game title..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            onChange={changeHandler}
                            value={values.genre}
                            placeholder="Enter game genre..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input
                            type="number"
                            id="activePlayers"
                            name="players"
                            min={0}
                            onChange={changeHandler}
                            value={values.players}
                            placeholder={0}
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="date" />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            onChange={changeHandler}
                            value={values.imageUrl}
                            placeholder="Enter image URL..."
                        />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            name="summary"
                            id="summary"
                            rows={5}
                            onChange={changeHandler}
                            value={values.summary}
                            placeholder="Write a brief summary..."
                        />
                    </div>
                    <input className="btn submit" type="submit" defaultValue="EDIT GAME" />
                </div>
            </form>
        </section>

    );
}