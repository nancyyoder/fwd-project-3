import React from 'react';
// import './Page.css';
import image from './image.png';

export default class Page extends React.Component {
    constructor(props) {
        super();
        this.color = props.color;
    }

    render() {
        const pageStyles = {
            width: '50%',
            height: '100%',
            background: `${this.color}`,
            display: 'flex'
        }

        return (
            <div className='Page' style={pageStyles}>
                <img src={image} alt="art"/>
            </div>
        )
    }
}