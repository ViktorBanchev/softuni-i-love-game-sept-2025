import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useForm from "../../hooks/useForm.js";
import useRequest from "../../hooks/useRequest.js";

export default function Edit() {
    const editGameAction = async (values) => {
        try {
            await request(`/data/games/${gameId}`, 'PUT', values);

            navigate(`/games/${gameId}/details`);
        } catch (err) {
            alert(err.message)
        }
    }

    const {
        register,
        setValues,
        formAction
    } = useForm(editGameAction,
        {
            title: '',
            genre: '',
            players: '',
            date: '',
            imageUrl: '',
            summary: '',
        })


    const navigate = useNavigate();
    const { gameId } = useParams();
    const { request } = useRequest(`/data/games/${gameId}`, {});


    useEffect(() => {
        request(`/data/games/${gameId}`)
            .then(result => {
                setValues(result)
            })
            .catch(err => {
                alert(err.message)
            })
    }, [gameId])





    return (
        <section id="edit-page">
            <form id="add-new-game" action={formAction}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            {...register('title')}
                            placeholder="Enter game title..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            {...register('genre')}
                            placeholder="Enter game genre..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input
                            type="number"
                            id="activePlayers"
                            min={0}
                            {...register('players')}
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
                            {...register('imageUrl')}
                            placeholder="Enter image URL..."
                        />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            id="summary"
                            rows={5}
                            {...register('summary')}
                            placeholder="Write a brief summary..."
                        />
                    </div>
                    <input className="btn submit" type="submit" defaultValue="EDIT GAME" />
                </div>
            </form>
        </section>

    );
}