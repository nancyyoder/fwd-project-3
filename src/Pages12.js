// import './Page.css';
// import image from './image.png';
import React from 'react';
import Page1 from './Page1.js';
import Page2 from './Page1.2.js';

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
            <div classname='Page' style={pageStyles}>
                <Page1 color='black' />
                <Page2 color='black' />
            </div>
        )
    }
}