import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Education extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className="card-content">
                        <h6 className="card-panel purple accent-3"><strong>EDUCATION</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Android develoment</td>
                                    <td>Jan 2018</td>
                                    <td>
                                        <Link to = "g" className= "btn orange darken-2">View</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Android develoment</td>
                                    <td>Jan 2018</td>
                                    <td>
                                        <Link to = "g" className= "btn green accent-4">View</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Android develoment</td>
                                    <td>Jan 2018</td>
                                    <td>
                                        <Link to = "g" className= "btn blue lighten-2">View</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Android develoment</td>
                                    <td>Jan 2018</td>
                                    <td>
                                        <Link to = "g" className= "btn red darken-1">View</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;