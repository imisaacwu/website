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
                        popup_icon="Devpost"
                        popup_text="Submission"
                        tags={["HTML", "CSS", "JavaScript", "Python", "Git"]}
                    />
                    <ProjTile
                        title="Robotics Simulator"
                        subtitle="For testing Mars Rovers"
                        description="Developed as a Software member on UW's Husky Robotics team. Aiming to replicate real-world scenarios and allow for virtual testing."
                        img_class="rover-img"
                        alt="Gif of the simulator"
                        url="https://github.com/huskyroboticsteam/Simulator"
                        tags={["React", "C#", "Unity", "Git"]}
                    />
                </div>
                <div className="col">
                    <ProjTile
                        title="Chess"
                        subtitle="Made from scratch"
                        description="Submitted as a part of my CSE 123 course, made over a week."
                        img="./docs/images/chess.png"
                        alt="Text chess board"
                        url="https://github.com/imisaacwu/Chess"
                        tags={["Java", "Git"]}
                    />
                    <ProjTile
                        title="Personal Website"
                        subtitle="(You're on it)"
                        description="Self-learned and developed over the course of about two weeks."
                        img="./docs/images/website.png"
                        alt="Home page"
                        url="https://github.com/imisaacwu/website"
                        tags={["React", "HTML", "CSS", "Git"]}
                    />
                </div>
            </div>
        </>
    );
}

export default Projects;