import { useNavigate } from "react-router";
import request from "../../utils/requester.js";
import { useEffect, useState } from "react";
import {ref} from 'firebase/storage'

export default function GameCreate() {
    const navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(imagePreview);
            setImagePreview(null);
        }
    }, [imageUpload, imagePreview])

    const createGameHandler = async (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const {image, ...data} = Object.fromEntries(formData);

        data.imageUrl = image;
        data.players = Number(data.players);
        data._createdOn = Date.now();

        await request('games', 'POST', data);
        navigate("/games");
    }

    const imageChangeHandler = (e) => {
        const image = e.target.files[0];
        const imageUrl = URL.createObjectURL(image);
        setImagePreview(imageUrl);
    }

    const imageUploadClickHandler = () => {
        setImageUpload(state => !state);
    }

    return (
        <section id="add-page">
            <form id="add-new-game" onSubmit={createGameHandler}>
                <div className="container">
                    <h1>Add New Game</h1>
                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            name="title"
                            placeholder="Enter game title..."
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
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
                            placeholder={0}
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" name="date" />
                    </div>
                    <div className="form-group-full">
                        <label htmlFor="image">{imageUpload ? 'Image Upload' : 'Image Url'}:</label>
                        <button type="button" className='details-button' onClick={imageUploadClickHandler}>{imageUpload ? 'Image Url' : 'Image Upload'}</button>
                        {imageUpload
                            ? <input type="file" id="image" name="image" placeholder="Upload File" onChange={imageChangeHandler} />
                            : <input type="text" id="image" name="image" placeholder="Enter image URL..." />
                        }

                        {imagePreview && (
                            <img src={imagePreview} alt="preview image" />
                        )}

                    </div>
                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            name="summary"
                            id="summary"
                            rows={5}
                            placeholder="Write a brief summary..."
                            defaultValue={""}
                        />
                    </div>
                    <input className="btn submit" type="submit" defaultValue="ADD GAME" />
                </div>
            </form>
        </section>

    );
}