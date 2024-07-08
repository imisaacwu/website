import React from 'react'

export const Home = () => {
    return (
        <div className="container">
            <div id="small" className="container">
                <div className="title small">Hi, I'm Isaac Wu!</div>
                <div id="main" className="container">
                    <div className="panel">
                        <div className="title main">Hi, I'm Isaac Wu!</div>
                        <div className="bio">I'm a rising junior at UW studying&nbsp;
                            <a href="https://www.cs.washington.edu/academics/ugrad" target="_blank" rel="noreferrer">Computer Engineering</a>. <br /><br />
                            I enjoy finding new projects to continue developing my programming skills :&#41;<br /><br />
                            When I'm not obsessing over coding problems, I like reading books (
                                <a href="https://www.goodreads.com/book/show/44767458-dune" target="_blank" rel="noreferrer">currently reading</a>
                            ), discovering new music (
                                <a href="https://open.spotify.com/track/7G6WuVZuTbF6JcnA9wOvsD?si=fa4ac5d8dad14ed8" target="_blank" rel="noreferrer">on repeat</a>
                            ), and playing video games.
                        </div>
                    </div>
                    <div id="info">
                        <img id="me" src={require('./docs/images/me.jpeg')} alt="me" />
                        <div id="icons">
                            <a href="https://github.com/imisaacwu" target="_blank" rel="noreferrer">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/isaacw1925/" target="_blank" rel="noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="mailto:isaacwu@uw.edu" target="_blank" rel="noreferrer">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}