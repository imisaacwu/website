import React from 'react'
import "./docs/images/icon.png"

export const Home = () => {
    return (
        <div className="container">
            <div className="panel">
                <div className="title">Hi, I'm Isaac Wu!</div>
                <div className="bio">I'm a rising junior at UW studying
                    <a href="https://www.cs.washington.edu/academics/ugrad" target="_blank" rel="noreferrer"> Computer Engineering</a>
                    .
                </div>
            </div>
            <div id="info">
                <img id="me" src={require('./docs/images/icon.png')} alt="me" />
                <div id="icons">
                    <a href="https://github.com/imisaacwu" target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/isaacw1925/" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/imisaacwu" target="_blank" rel="noreferrer">
                        <i className="bi bi-envelope-fill"></i>
                    </a>
                    {/* <a href="https://github.com/imisaacwu" target="_blank" rel="noreferrer">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://github.com/imisaacwu" target="_blank" rel="noreferrer">
                        <i class="bi bi-github"></i>
                    </a> */}
                </div>
            </div>
        </div>
    );
}