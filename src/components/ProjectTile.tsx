import 'bootstrap-icons/font/bootstrap-icons.css'
import { Icon, iconSrc, Project } from './Project'
import './ProjectTile.css'

export const ProjectTile = ({
    title = 'Title',
    subtitle = 'Subtitle',
    description = 'Description',
    img = './docs/images/i-con.png',
    alt = 'alt',
    url = 'https://imisaacwu.github.io/website',
    tags = []
}: Project) => {
    return (
        <a id='project' href={url} target='_blank' rel='noreferrer'>
            <section id='tile'>
                <div id='content'>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </div>
                <div id='img-container'>
                    <img id='img' alt={alt} src={img}/>
                </div>
                <div id='tags'>
                    {tags.map(tag => 
                        <div>
                            <img alt={tag} src={iconSrc[tag as keyof typeof Icon]}/>
                        </div>
                    )}
                </div>
            </section>
            <div id='hover'/>
        </a>
    )
}