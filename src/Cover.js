import React from 'react';

export default class Page extends React.Component {

    render() {
        const pageStyles = {
            width: '0%',
            height: '0%',
            background: 'white'
        }

        return (
            <div className='Page' style={pageStyles}>
                <h1>Cover</h1>
            </div>
        )
    }
}