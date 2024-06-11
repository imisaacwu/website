import React from 'react'
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import './css/styles.css';
import Projects from "./components/Projects";
import {Home} from "./components/Home";
import {NoMatch} from "./components/NoMatch";
import { Resume } from './components/Resume';
import "./components/docs/pdf/Isaac-Wu-Resume.pdf";
import Intro from './components/Intro';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Intro />} />
                <Route path={"home"} element={<Home />} />
                <Route path={"website"} element={<Intro />} />
                <Route path={"projects"} element={<Projects />} />
                <Route path={"resume"} element={<Resume />} />
                <Route path={"*"} element={<NoMatch />} />
            </Routes>
            {/* <embed src={"./components/docs/pdf/Isaac-Wu-Resume.pdf"} /> */}
        </>
    );
}

export default App;
