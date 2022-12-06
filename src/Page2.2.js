import React from 'react';

export default class Page extends React.Component {
    constructor(props) {
        super();
        this.color = props.color;
    }

    render() {
        const pageStyles = {
            width: '0%',
            height: '0%',
            background: 'white'
        }

        return (
            <div className='Page' style={pageStyles}>
                <h1>Game</h1>
            </div>
        )
    }
}