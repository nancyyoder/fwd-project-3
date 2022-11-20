import React from 'react';
export default class Page extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const containStyles = {
            display: 'flex',
            background: 'black'
        }
        return(
            <div classname='container' style={containStyles}></div>
        );
    }
}