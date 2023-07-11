import React from "react";
import { useNavigate } from "react-router-dom";
import penny from '../images/penny_too_much_internet.jpg'
import './NotFoundPage.css'

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div className="not_found_page">
            <img
                src={penny}
                alt="Error 404"
                className="error_image"
            />
            <p className="error_message">Too much internet for today...</p>
            <button className="navigate-home-button" onClick={()=>navigate("/")}>
                <span className="navigate-home-button-text">Go back</span>
            </button>
        </div>
    );
};
export default NotFoundPage