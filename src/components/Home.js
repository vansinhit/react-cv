import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Navbar from './Navbar';
import Portfolois from './Portfolois';
import Profile from './Profile';
import Skills from './Skills';
import About from './About'

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col s12 m4 l3'>
                            <Profile />
                            <About/>
                        </div>
                        <div className = 'col s12 m8 l9'>
                            <Skills />
                            <Experience />
                            <Education />
                            <Portfolois />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

