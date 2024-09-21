import React from 'react';
import ProjTile from "./ProjTile";

function Projects(props) {
    const projects = [
        {
            title: "SafeScroll",
            subtitle: "DubHacks '23 Winner",
            description: "Extension that automatically blurs sensitive and potentially triggering content, including text and images.",
            img: "./docs/images/safescroll.jpeg",
            alt: "SafeScroll logo",
            url: "https://devpost.com/software/safescroll",
            popup_icon: "./docs/images/devpost.png",
            popup_text: "Submission",
            tags: ["HTML", "CSS", "JavaScript", "Python", "Git"]
        },
        {
            title: "Simulator",
            subtitle: "For testing Mars Rovers",
            description: "Developed as a Software member on UW's Husky Robotics team. Aiming to replicate real-world scenarios and allow for virtual testing.",
            img_class: "rover-img",
            alt: "Gif of the simulator",
            url: "https://github.com/huskyroboticsteam/Simulator",
            tags: ["React", "C#", "Unity", "Git"]
        },
        {
            title: "Webatro",
            subtitle: "A web-based clone of video game Balatro",
            description: "",
            img: "./docs/images/webatro.png",
            alt: "Main Menu",
            url: "https://github.com/imisaacwu/webatro",
            tags: ["React", "Vite", "TypeScript", "CSS", "Git"]
        },
        {
            title: "Chess",
            subtitle: "Made from scratch",
            description: "Submitted as a part of my CSE 123 course, made over a week.",
            img: "./docs/images/chess.png",
            alt: "Text chess board",
            url: "https://github.com/imisaacwu/Chess",
            tags: ["Java", "Git"]
        },
        {
            title: "Maze & Labyrinth Generator",
            subtitle: "Built for Hack Club's Blot",
            description: "Mazes generated using a randomized Kruskal's, Labyrinths built procedurally using their seed pattern.",
            img: "./docs/images/maze.png",
            alt: "A generated maze",
            url: "https://github.com/hackclub/blot/pull/544",
            tags: ["JavaScript", "Git"]
        },
        {
            title: "Personal Website",
            subtitle: "(You're on it)",
            description: "Self-learned and developed over the course of about two weeks, with the aim to create a place where I can showcase my projects.",
            img: "./docs/images/website.png",
            alt: "Home page",
            url: "https://github.com/imisaacwu/website",
            tags: ["React", "HTML", "CSS", "Git"]
        }
    ].map(proj => <ProjTile key={proj.title} {...proj} />)
    .reduce((acc, val, i, arr) => {
        if(i % 2 === 0) {
            acc.push(arr.slice(i, i+2));
        }
        return acc;
    }, []);

    return (
        <div id={"projects"} className={"container"}>
            <div id="two-col">
                {projects.map((r, i) =>
                    <div key={i} className="row">
                        {r}
                    </div>
                )}
            </div>
            <div id="one-col">
                {projects}
            </div>
        </div>
    );
}

export default Projects;