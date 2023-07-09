import React from "react";
import { useNavigate } from "react-router-dom";
import penny from '../images/penny_too_much_internet.jpg'

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <img
                src={penny}
                alt="Error 404"
                className="error-image"
            />
            <p>Too much internet for today...</p>
            <button className="navigate-home-button" onClick={()=>navigate("/")}>
                <span className="navigate-home-button-text">Go back</span>
            </button>
        </div>
    );
};
export default NotFoundPage;