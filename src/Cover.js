import React from 'react';
import flatirons from './img/flatirons.png';

export default class Page extends React.Component {

    render() {
        const pageStyles = {
            width: '0%',
            height: '0%',
            background: 'white'
        }

        const coverStyles = {
            width: '1920px',
            height: '1080px'
        }

        return (
            <div className='Page' style={pageStyles}>
                <img src={flatirons} alt={"cover image"}/>
            </div>
        )
    }
}