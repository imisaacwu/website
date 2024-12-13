import { ProjectTile } from './ProjectTile';
import { projects } from './Project';
import './Projects.css';

export const Projects = () => {
    const tiles = projects.map(p => <ProjectTile key={p.title} {...p} />)
    const split: JSX.Element[][] = tiles.reduce((acc: JSX.Element[][], _, i, arr) => {
        if (i % 2 === 0) {
            acc.push(arr.slice(i, i + 2))
        }
        return acc;
    }, [])

    return (
        <div id='projects' className='container'>
            <div id='two-col'>
                {split.map((r, i) =>
                    <div key={i} className='row'>
                        {r}
                    </div>
                )}
            </div>
            <div id='one-col'>
                {tiles}
            </div>
        </div>
    )
}