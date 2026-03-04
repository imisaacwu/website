import { ProjectTile } from './ProjectTile';
import { projects } from './Project';
import './Projects.css';

export const Projects = () => {
    const tiles = projects.map(p => <ProjectTile key={p.title} {...p} />)

    return (
        <div id='projects'>
            {tiles}
        </div>
    )
}