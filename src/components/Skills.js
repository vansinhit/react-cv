import React, { Component } from 'react';
class Skills extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6 className="card-panel orange darken-2"><strong>PROFESSIONL SKILLS</strong></h6>
                        <div className = "row mt-top">
                            <div className = "col s6">
                                <p>Android</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate  blue lighten-2" style={{width : '89%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Fluter</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate  green accent-4" style={{width : '98%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Firebase</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate purple accent-3" style={{width : '80%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>IOS</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate red darken-1" style={{width : '95%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>XML</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate pink lighten-1" style={{width : '87%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>SQL</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate teal darken-4" style={{width : '67%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;