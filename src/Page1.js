import React from 'react';
// import './Page.css';
import image from './image.png';
import Page2 from './Page2.js';

export default class Page extends React.Component {
    constructor(props) {
        super();
        this.color = props.color;
    }

    render() {
        const pageStyles = {
            width: '100%',
            height: '100%',
            background: `${this.color}`,
            display: 'flex'
        }

        return (
            <div>
                <div classname='Page' style={pageStyles}>
                    <img src={image} alt="art"/>
                    <Page2 color='black' />
                </div>
            </div>

        )
    }
}