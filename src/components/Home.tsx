import './Home.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Home = () => {
    return (
        <div className='container'>
            <div id='panel'>
                <div id='title'>Hi, I'm Isaac Wu!</div>
                <div id='bio'>
                    I'm a junior at UW studying&nbsp;
                    <a href='https://www.cs.washington.edu/academics/ugrad' target='_blank' rel='noreferrer'>
                        Computer Engineering
                    </a>
                    . <br />
                </div>
            </div>
            <div id='info'>
                <img id='me' src={'./images/me.jpeg'} />
                <div id='icons'>
                    <a href='https://github.com/imisaacwu' target='_blank' rel='noreferrer'>
                        <i className='bi bi-github' />
                    </a>
                    <a href='https://www.linkedin.com/in/isaacw1925' target='_blank' rel='noreferrer'>
                        <i className='bi bi-linkedin' />
                    </a>
                    <a href='mailto:isaacwu@uw.edu' target='_blank' rel='noreferrer'>
                        <i className='bi bi-envelope-fill' />
                    </a>
                </div>
            </div>
        </div>
    )
}