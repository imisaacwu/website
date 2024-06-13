import React from 'react';
import ProjTile from "./ProjTile";

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
                        title="Robotics Simulator"
                        subtitle="For testing Mars Rovers"
                        description="Developed as a Software member on UW's Husky Robotics team. Aiming to replicate real-world scenarios and allow for virtual testing."
                        class="rover-img"
                        alt="Gif of the simulator"
                        url="https://github.com/huskyroboticsteam/Simulator"
                    />
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