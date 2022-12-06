import React from 'react';
// import './Page.css';
// import { AdobeFonts } from 'react-adobe-fonts'

export default class Page extends React.Component {
    constructor(props) {
        super();
        this.color = props.color;
    }

    render() {
        const pageStyles = {
            width: '0%',
            height: '0%',
            background: `${this.color}`
        }

        return (
            <div className='Page' style={pageStyles}>
            </div>
        )
    }
}