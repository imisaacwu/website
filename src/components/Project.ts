export enum Icon {
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
}

export const iconSrc: {[I in keyof typeof Icon]: string} = {
    Java: './icons/java.png',
    TypeScript: './icons/typescript.png',
    JavaScript: './icons/js.png',
    React: './icons/react.svg',
    Vite: './icons/vite.svg',
    HTML: './icons/html.png',
    Unity: './icons/unity.png',
    'C\#': './icons/cs.png',
    Python: './icons/python.png',
    FastAPI: './icons/fastapi.png',
    "Intel Tiber": './icons/tiber.jpg',
    'OpenAI Whisper': './icons/openai.png',
    Perplexity: './icons/perplexity.webp',
    PyTorch: './icons/pytorch.png',
}

export type Project = {
    title: string
    subtitle: string
    description: string
    img: string
    img_class?: string
    alt: string
    url: string
    popup_icon?: string
    popup_text?: string
    tags: string[]
}

export const projects: Project[] = [
    {
        title: 'brAInstorm',
        subtitle: 'DubHacks \'24 Intel AI Track Winner',
        description: 'Full-stack app that generate idea summaries and inspiration bits from snippets of text and audio.',
        img: './projects/brainstorm.png',
        alt: 'Picture of the website',
        url: 'https://devpost.com/software/brainstorm-mdaqp3',
        popup_icon: './icons/devpost.png',
        popup_text: 'Submission',
        tags: ['React', 'Vite', 'TypeScript', 'FastAPI', 'Intel Tiber', 'OpenAI Whisper', 'Perplexity', 'PyTorch']
    },
    {
        title: 'SafeScroll',
        subtitle: 'DubHacks \'23 Winner',
        description: 'Extension that automatically blurs sensitive and potentially triggering content, including text and images.',
        img: './projects/safescroll.png',
        alt: 'SafeScroll logo',
        url: 'https://devpost.com/software/safescroll',
        popup_icon: './icons/devpost.png',
        popup_text: 'Submission',
        tags: ['HTML', 'JavaScript', 'Python']
    },
    {
        title: 'Simulator',
        subtitle: 'For testing Mars Rovers',
        description: 'Developed as a Software member on UW\'s Husky Robotics team. Aiming to replicate real-world scenarios and allow for virtual testing.',
        img: './projects/sim.png',
        img_class: 'rover-img',
        alt: 'Gif of the simulator',
        url: 'https://github.com/huskyroboticsteam/Simulator',
        tags: ['React', 'C#', 'Unity']
    },
    {
        title: 'Webatro',
        subtitle: 'A web-based clone of video game Balatro',
        description: '',
        img: './projects/webatro.png',
        alt: 'Main Menu',
        url: 'https://github.com/imisaacwu/webatro',
        tags: ['React', 'Vite', 'TypeScript']
    },
    {
        title: 'Chess',
        subtitle: 'Made from scratch',
        description: 'Submitted as a part of my CSE 123 course, made over a week.',
        img: './projects/chess.png',
        alt: 'Text chess board',
        url: 'https://github.com/imisaacwu/Chess',
        tags: ['Java']
    },
    {
        title: 'Maze & Labyrinth Generator',
        subtitle: 'Built for Hack Club\'s Blot',
        description: 'Mazes generated using a randomized Kruskal\'s, Labyrinths built procedurally using their seed pattern.',
        img: './projects/maze.png',
        alt: 'A generated maze',
        url: 'https://github.com/hackclub/blot/pull/544',
        tags: ['JavaScript']
    },
]