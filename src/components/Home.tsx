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
                            <Images images={['albums/buzzkill.jpg', 'albums/u.jpg', 'albums/halo.jpg', 'albums/dive.jpg', 'albums/wishbone.jpeg', 'albums/matteroftime.jpeg', 'albums/tlit21c.jpeg', 'albums/sweetboy.jpg', 'albums/thestoryofus.jpg', 'albums/getup.jpg', 'albums/subwaysongs.jpg', 'albums/oceanparkstandoff.jpg']} links={['https://open.spotify.com/album/41oBhRyeuyMHkVdp2LYVJE?si=1L1LrpCJS_-f1M_PJw9Kqg', 'https://open.spotify.com/album/1qSS0T6Ffrb3rFVpizzOuk?si=0CcdiPcEQCeQ4A9VpH8UVg', 'https://open.spotify.com/album/4T7qu6MdxoGjzZPErRWgsO?si=2ZSK2105TcWqXcr2C-3URg', 'https://open.spotify.com/album/7rte7WibgnQAyx25NhYJp6?si=fVzMFR2MQVqFYUBealKtnw', 'https://open.spotify.com/album/01FqYKXIKnGNh2dqdB4fjD?si=8LzBjJIDRZaxyJD1anUwBw', 'https://open.spotify.com/album/5rMOCuiWWbEBcHaKM69Hmv?si=mcgqS1JtQ9mhU9_SoEkdSA', 'https://open.spotify.com/album/5gJGE4rjt0FgauKwsrak11?si=2u10OGYASjKyZ6m_WowniQ', 'https://open.spotify.com/album/2jX6yKrWw9bY7JAYHhhtqZ?si=K5ayGGBhTL691VnWBbswlA', 'https://open.spotify.com/album/30v79AzKU1U5Rc7pwmzbkk?si=t-_v-bg-SBezjFWh1Tg0Kw', 'https://open.spotify.com/album/4N1fROq2oeyLGAlQ1C1j18?si=1f06L8fFTpOS7CB49e7I-A', 'https://open.spotify.com/album/3zfsyrUc2lWulBUcDzaos7?si=dwBrobElRPyY_-1-sP5t-Q', 'https://open.spotify.com/album/3RLGxqyxJbe9wFro2TQp4T?si=67yv_FlUTz-ITmla-m1lww']} />
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
