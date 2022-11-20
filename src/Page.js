import React from 'react';
// import './Page.css';

export default class Page extends React.Component {
    constructor(props) {
        super();
        this.color = props.color;
    }

    render() {
        const pageStyles = {
            width: '50%',
            height: '100%',
            background: `${this.color}`
        }

        return (
            <div classname='Page' style={pageStyles}>
                <p>this is some page content</p>
            </div>
        )
    }
}