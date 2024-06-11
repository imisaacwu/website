import React from 'react'
import "./docs/images/icon.png"

export const Home = () => {
  return (
    <div className="container">
        <div className="panel">
            <div className="title">Hi, I'm Isaac Wu!</div>
            <div className="bio">I'm a rising junior at UW studying
                <a href="https://www.cs.washington.edu/academics/ugrad" target="_blank" rel="noreferrer"> Computer Engineering</a>
                .
            </div>
        </div>
        <img id="me" src={require('./docs/images/icon.png')} alt="me" />
    </div>
  )
}