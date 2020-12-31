import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6 className="card-panel green accent-4" ><strong>ABOUT ME</strong></h6>
                            <p>I am a fresh graduate student of University of Education. 
                                Specialized in information technology. I spent 3 years on android programming
                            </p>  
                    </div>
                    <div className ="card-action">
                        <h6 className="card-panel  blue lighten-2"><strong>PERSONAL INFO</strong></h6>
                        <div className = "row mt">
                            <div className="col s12 m6 16 x16">
                                <p><strong className = "green-text text-accent-4">ADDRESS </strong>QuangNam</p>
                                <p><strong className = "orange-text text-accent-4">EMAIL </strong>Transinh631@gmail.com</p>
                                <p><strong className = "red-text text-accent-4">PHONE </strong>0353062239</p>       
                            </div>
                         </div>
                    </div>
                    <div className ="card-action">
                        <h6 className="card-panel orange accent-4"><strong>LANGUAGE</strong></h6>
                        <div className = "row mt">
                            <div className="col s12">
                            <div >
                                <p className = "blue-text text-lighten-2">ENGLISH</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate  blue lighten-2" style={{width : '80%'}}></div>
                                </div>
                            </div>
                            <div >
                                <p className = "red-text text-accent-4">JAPANESE</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate  red accent-4" style={{width : '58%'}}></div>
                                </div>
                            </div>
                            <div >
                                <p className = "purple-text text-accent-3">VIETNAMESE</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate  purple accent-4" style={{width : '98%'}}></div>
                                </div>
                            </div>      
                            </div>
                         </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default About;