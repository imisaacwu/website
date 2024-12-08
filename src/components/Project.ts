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
        img: './images/brainstorm.png',
        alt: 'Picture of the website',
        url: 'https://devpost.com/software/brainstorm-mdaqp3',
        popup_icon: './images/devpost.png',
        popup_text: 'Submission',
        tags: ['React', 'Vite', 'TypeScript', 'FastAPI', 'Intel Tiber', 'OpenAI Whisper', 'Perplexity', 'PyTorch', 'Scikit-learn']
    },
    {
        title: 'SafeScroll',
        subtitle: 'DubHacks \'23 Winner',
        description: 'Extension that automatically blurs sensitive and potentially triggering content, including text and images.',
        img: './images/safescroll.jpeg',
        alt: 'SafeScroll logo',
        url: 'https://devpost.com/software/safescroll',
        popup_icon: './images/devpost.png',
        popup_text: 'Submission',
        tags: ['HTML', 'JavaScript', 'Python']
    },
    {
        title: 'Simulator',
        subtitle: 'For testing Mars Rovers',
        description: 'Developed as a Software member on UW\'s Husky Robotics team. Aiming to replicate real-world scenarios and allow for virtual testing.',
        img: './images/rover.png',
        img_class: 'rover-img',
        alt: 'Gif of the simulator',
        url: 'https://github.com/huskyroboticsteam/Simulator',
        tags: ['React', 'C#', 'Unity']
    },
    {
        title: 'Webatro',
        subtitle: 'A web-based clone of video game Balatro',
        description: '',
        img: './images/webatro.png',
        alt: 'Main Menu',
        url: 'https://github.com/imisaacwu/webatro',
        tags: ['React', 'Vite', 'TypeScript']
    },
    {
        title: 'Chess',
        subtitle: 'Made from scratch',
        description: 'Submitted as a part of my CSE 123 course, made over a week.',
        img: './images/chess.png',
        alt: 'Text chess board',
        url: 'https://github.com/imisaacwu/Chess',
        tags: ['Java']
    },
    {
        title: 'Maze & Labyrinth Generator',
        subtitle: 'Built for Hack Club\'s Blot',
        description: 'Mazes generated using a randomized Kruskal\'s, Labyrinths built procedurally using their seed pattern.',
        img: './images/maze.png',
        alt: 'A generated maze',
        url: 'https://github.com/hackclub/blot/pull/544',
        tags: ['JavaScript']
    },
    {
        title: 'Personal Website',
        subtitle: '(You\'re on it)',
        description: 'Self-learned and developed over the course of about two weeks, with the aim to create a place where I can showcase my projects.',
        img: './images/website.png',
        alt: 'Home page',
        url: 'https://github.com/imisaacwu/website',
        tags: ['React', 'Vite', 'TypeScript', 'HTML']
    }
]