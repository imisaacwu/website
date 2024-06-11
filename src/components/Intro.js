import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/styles.css";

export default function Intro() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 2000)
    }, [navigate])

    return (
        <div id="bkg" className="fade">
            <div className="top slider slide-up">Isaac Wu</div>
            <div className="bottom slider slide-down" />
        </div>
    )
}