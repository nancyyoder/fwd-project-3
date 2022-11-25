import React from 'react';
// import './Page.css';
// import { AdobeFonts } from 'react-adobe-fonts'
import capricorn from './capricorn.png';
import aquarius from './aquarius.png';
import pisces from './pisces.png';
import aries from './aries.png';
import taurus from './taurus.png';
import gemini from './gemini.png';
import cancer from './cancer.png';
import leo from './leo.png';
import virgo from './virgo.png';
import libra from './libra.png';
import scorpio from './scorpio.png';
import sagitarius from './sagitarius.png';

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

        const divStyles = {
            textAlign: 'center',
            display: 'inline-block'
        }

        const h1Styles = {
            fontSize: '3em',
            color: 'white',
            fontFamily: 'superior-title, serif',
            fontWeight: '500',
            fontStyle: 'normal',
            margin: '0px',
            textAlign: 'center'
            // background: 'orange'
        }
        const h2Styles = {
            fontSize: '2em',
            color: 'white',
            fontFamily: 'superior-title, serif',
            fontWeight: '500',
            fontStyle: 'normal',
            margin: '0px',
            // display: 'inline-block'
            // textAlign: 'center'
            // background: 'orange'
        }

        return (
            <div classname='Page' style={pageStyles}>
                <h1 style={h1Styles}>HOROSCOPES</h1>

                <div style={divStyles}>
                    <img src={capricorn} alt="capricorn"/>
                    <h2 style={h2Styles}>CAPRICORN</h2>
                </div>

                <div style={divStyles}>
                    <img src={aquarius} alt="aquarius"/>
                    <h2 style={h2Styles}>AQUARIUS</h2>
                </div>

                <div style={divStyles}>
                    <img src={pisces} alt="pisces"/>
                    <h2 style={h2Styles}>PISCES</h2>
                </div>

                <div style={divStyles}>
                    <img src={aries} alt="aries"/>
                    <h2 style={h2Styles}>ARIES</h2>
                </div>

                <div style={divStyles}>
                    <img src={taurus} alt="taurus"/>
                    <h2 style={h2Styles}>TAURUS</h2>
                </div>

                <div style={divStyles}>
                    <img src={gemini} alt="gemini"/>
                    <h2 style={h2Styles}>GEMINI</h2>
                </div>

                <div style={divStyles}>
                    <img src={cancer} alt="cancer"/>
                    <h2 style={h2Styles}>CANCER</h2>
                </div>

                <div style={divStyles}>
                    <img src={leo} alt="leo"/>
                    <h2 style={h2Styles}>LEO</h2>
                </div>

                <div style={divStyles}>
                    <img src={virgo} alt="virgo"/>
                    <h2 style={h2Styles}>VIRGO</h2>
                </div>

                <div style={divStyles}>
                    <img src={libra} alt="libra"/>
                    <h2 style={h2Styles}>LIBRA</h2>
                </div>

                <div style={divStyles}>
                    <img src={scorpio} alt="scorpio"/>
                    <h2 style={h2Styles}>SCORPIO</h2>
                </div>

                <div style={divStyles}>
                    <img src={sagitarius} alt="sagitarius"/>
                    <h2 style={h2Styles}>SAGITARIUS</h2>    
                </div>
            </div>
        )
    }
}