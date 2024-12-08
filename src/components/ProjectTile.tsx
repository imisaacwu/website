import 'bootstrap-icons/font/bootstrap-icons.css'
import { Project } from './Project'
import './ProjectTile.css'

enum Icon {
    'Java',
    'TypeScript',
    'JavaScript',
    'React',
    'Vite',
    'HTML',
    'Unity',
    'C\#',
    'Python',
    'FastAPI',
    'Intel Tiber',
    'OpenAI Whisper',
    'Perplexity',
    'PyTorch',
    'Scikit-learn'
}

const iconSrc: {[I in keyof typeof Icon]: string} = {
    Java: './images/java.webp',
    TypeScript: './images/typescript.png',
    JavaScript: './images/js.png',
    React: './images/react.png',
    Vite: './images/vite.svg',
    HTML: './images/html.png',
    Unity: './images/unity.png',
    'C\#': './images/cs.png',
    Python: './images/python.png',
    FastAPI: './images/fastapi.png',
    "Intel Tiber": './images/tiber.jpg',
    'OpenAI Whisper': './images/openai.webp',
    Perplexity: './images/perplexity.webp',
    PyTorch: './images/pytorch.png',
    'Scikit-learn': './images/scikit.png'
}

export const ProjectTile = ({
    title = 'Title',
    subtitle = 'Subtitle',
    description = 'Description',
    img = './docs/images/website.png',
    img_class ='none',
    alt = 'alt',
    url = 'https://imisaacwu.github.io/website',
    popup_icon = './images/github.png',
    popup_text = 'Source code',
    tags = []
}: Project) => {
    
    return (
        <div id='tile-wrap'>
            <a id='popup' href={url} target='_blank' rel='noreferrer'>
                <img src={popup_icon} className='popup-icon' alt={`${popup_icon.slice(popup_icon.lastIndexOf('/', -4))} icon`} />
                {popup_text}
                <i className='bi bi-box-arrow-up-right' />
            </a>
            <a id='tile'>
                <img className={`proj-img ${img_class}`} src={img} alt={alt} />
                <div id='content'>
                    <div id='title'>{title}</div>
                    <div id='subtitle'>{subtitle}</div>
                    <div id='description'>{description}</div>
                    <div id='tags'>
                        {tags.map(t =>
                            <div key={t} className={`tag ${t}`}>
                                <img className={`tag-icon ${t}`} alt={`icon of ${t}`} src={iconSrc[t as keyof typeof Icon]} />
                                {t}
                            </div>
                        )}
                    </div>
                </div>
            </a>
        </div>
    )
}