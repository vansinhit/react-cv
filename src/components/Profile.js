import React, { Component } from 'react';
import ImgProfile from '../Image/sinh1.jpg'
class Profile extends Component {
    render() {
        return (
            <div>
                <div className = 'card'>
                    <div className = 'card-image'>
                        <img className = 'activator' src = {ImgProfile} alt = "Trần Văn Sinh"/>
                     </div>
                     <div className = "card-content">
                         <span className = "card-title activator grey-text text-darken-4">Tran Van Sinh</span>
                         <p>Mobile Development</p>
                     </div>
                </div>
            </div>
        );
    }
}

export default Profile;

