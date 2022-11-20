import React from 'react';

export default class Text extends React.Component {
    constructor(props) {
        super();
        this.content = props.content;
    }

    render() {
        const pStyles = {
            fontSize: '3em',
            color: 'blue',
            fontFamily: 'Courier New'
        };
        return (
            <p classname='mag-text' style={pStyles}>This is the text: </p>
        );
    }
}