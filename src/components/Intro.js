import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 2000)
    }, [navigate])

    return (
        <div id="bkg">
            <div className="top slider">Isaac Wu</div>
            <div className="bottom slider" />
        </div>
    )
}