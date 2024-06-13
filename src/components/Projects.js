import React from 'react';
import ProjTile from "./ProjTile";
import "./docs/images/icon.png";
import "./docs/images/Cat.gif";
import "./docs/images/ghibli.png";
import "./docs/images/quaggy.png";
import "./docs/images/Ghibli Food Compilation.mp4";

function Projects(props) {
    return (
        <>
            <div id={"projects"} className={"container"}>
                <div className={"col"}>
                    <ProjTile
                        title="SafeScroll"
                        subtitle="DubHacks '23 Winner"
                        description="Extension that automatically blurs sensitive and potentially triggering content, including text and images."
                        img="./docs/images/safescroll.jpeg"
                        alt="SafeScroll icon"
                        url="https://devpost.com/software/safescroll"
                    />
                    <ProjTile
                        img="./docs/images/sim.gif"
                    />
                    <ProjTile img="./docs/images/quaggy.png" />
                </div>
                <div className="col">
                    <ProjTile
                        title="Chess"
                        subtitle="Made from scratch"
                        description="Submitted as a part of my CSE 123 course, made in about 35 hours."
                        img="./docs/images/chess.png"
                        alt="Text chess board"
                        url="https://github.com/imisaacwu/Chess"
                    />
                </div>
            </div>
        </>
    );
}

export default Projects;