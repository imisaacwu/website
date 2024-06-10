import React from 'react'
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import './css/styles.css';
import Projects from "./components/Projects";
import {Home} from "./components/Home";
import {NoMatch} from "./components/NoMatch";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"website"} element={<Home />} />
                <Route path={"projects"} element={<Projects />} />
                <Route path={"*"} element={<NoMatch />} />
            </Routes>
        </>
    );
}

export default App;
