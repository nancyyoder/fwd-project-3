import React from 'react';
// import './Page.css';
import image from './image.png';
import Page2 from './Page2.js';

export default class Page extends React.Component {

    render() {
        const pageStyles = {
            width: '100%',
            height: '100%',
            background: 'black',
            display: 'flex'
        }

        return (
            <div>
                <div classname='Page' style={pageStyles}>
                    <img onClick={this.changePic} src={this.state.click ? old_pic : new_pic}  alt="art"/>
                    <Page2 color='black' />
                </div>
            </div>

        )
    }
}