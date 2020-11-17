import React from 'react'
import logo from '../logo.svg'

function Hero() {
    return (
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Hero