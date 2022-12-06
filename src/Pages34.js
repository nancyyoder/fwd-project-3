// import './Page.css';
// import image from './image.png';
import React from 'react';
import Page3 from './Page2.js';
import Page4 from './Page2.2.js';

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
                <Page3 color='#B56DAD' />
                <Page4 color='#B56DAD' />
            </div>
        )
    }
}