import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import './Home.css'
import { Images } from './Images'

enum Interests {
    HRT = 'Husky Robotics',
    // Elephant = 'Elephant Robotics',
    Boards = 'Board Games',
    Music = 'Music',
}

export const Home = () => {
    const [shown, setShown] = useState(Interests.HRT)

    return (
        <div id='home' className='container'>
            <div id='panel'>
                <div id='title'>Hi, I'm Isaac Wu!</div>
                <div id='bio'>
                    I'm a senior at UW studying&nbsp;
                    <a href='https://www.cs.washington.edu/academics/ugrad' target='_blank' rel='noreferrer'>
                        Computer Engineering
                    </a>
                    .
                    <div id='subbio'>
                        My primary focus is on Robotics and Systems Engineering, but I enjoy branching out and learning other topics like mobile/web development, machine learning, and wireless networking.
                    </div>
                </div>
                <div id='interests'>
                    Here are a few things I've been into lately:
                    <div id='selector'>
                        {Object.values(Interests).filter(i => isNaN(Number(i))).map((Interest) => (
                            <div key={Interest} className={Interest === shown ? 'selected' : ''} onClick={() => setShown(Interest as Interests)}>
                                {Interest}
                            </div>
                        ))}
                    </div>
                    <div id='interest'>
                        {shown === Interests.HRT && <div>
                            Husky Robotics is UW's Mars Rover Team, of which I am it's Software Lead. <br />
                            I work with 100+ engineers across 15 disciplines to create a mock Mars Rover from scratch to compete internationally. <br />
                            <Images images={['hrt/daedalus.jpg', 'hrt/service.jpg', 'hrt/showcase.jpeg', 'hrt/group.jpeg', 'hrt/prometheus.jpg', 'hrt/armdex.jpg', 'hrt/reactor.jpg']} />
                            Check out our team's website for more information <a href='https://uwrobots.org/' target='_blank' rel='noreferrer'>here</a>!
                        </div>}
                        {/* {shown == Interests.Elephant && <div>
                            Elephant Robotics
                        </div>} */}
                        {shown == Interests.Boards && <div>
                            I recently got into Wyrmspan by Stonemaier Games, which I've been hugely enjoying! <br />
                            It's a variant on the Wingspan games made by the same company, but I like this one the most. It's all about dragons and a lot of resource management, two of my favorite things. <br />
                            Here are my top board games so far:
                            <Images images={['boards/wyrmspan.jpeg', 'boards/sevenwonders.jpg', 'boards/catan.jpeg', 'boards/harmonies.jpeg', 'boards/tickettoride.jpg']} />
                        </div>}
                        {shown == Interests.Music && <div>
                            I listen to quite a bit of music, here are my favorite albums:
                            <Images images={['albums/buzzkill.jpg', 'albums/u.jpg', 'albums/halo.jpg', 'albums/dive.jpg', 'albums/wishbone.jpg', 'albums/matteroftime.jpeg', 'albums/tlit21c.jpg', 'albums/sweetboy.jpg', 'albums/thestoryofus.jpg', 'albums/getup.jpg', 'albums/subwaysongs.jpg', 'albums/oceanparkstandoff.jpg']} />
                        </div>}
                    </div>
                </div>
            </div>
            <div id='info'>
                <img id='me' src='me.jpeg' />
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
