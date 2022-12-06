// import React from 'react';
import React, { useState } from "react";
import capricorn from './horoscope/capricorn.png';
import Capricorn2 from './horoscope/Capricorn-txt2.png';

import aquarius from './horoscope/aquarius.png';
import Aquarius2 from './horoscope/Aquarius-txt.png';

import pisces from './horoscope/pisces.png';
import Pisces2 from './horoscope/Pisces-txt.png';

import aries from './horoscope/aries.png';
import taurus from './horoscope/taurus.png';
import gemini from './horoscope/gemini.png';
import cancer from './horoscope/cancer.png';
import leo from './horoscope/leo.png';
import virgo from './horoscope/virgo.png';
import libra from './horoscope/libra.png';
import scorpio from './horoscope/scorpio.png';
import sagitarius from './horoscope/sagitarius.png';

  

export default class Page extends React.Component {
    constructor(props) {
        super();
        this.color = props.color;
    }
      


    render() {
        const Location = () => {
            const [imageClicked, setImageClicked] = useState({
              Capricorn: false,
              Aquarius: false,
              Pisces: false
            })
            const onClickHandler = (order) => {
                const resetImages = {
                    Capricorn: false,
                    Aquarius: false,
                    Pisces: false
                }
                setImageClicked({
                  resetImages,
                  [order]: true
                })
              }



        const pageStyles = {
            width: '100%',
            height: '100%',
            // background: 'black'
            background: '#B56DAD'
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
        }
        const h2Styles = {
            fontSize: '1.8em',
            color: 'white',
            fontFamily: 'superior-title, serif',
            fontWeight: '500',
            fontStyle: 'normal',
            margin: '0px',
        }

        const secertMessage ={
            color: '#B56DAD'  
        }

        const container={
            display: 'flex',
            flexWrap: 'wrap',
            flex: '1 1 160px'
        }

        return (
            <div className='Page' style={pageStyles}>
                <h1 style={h1Styles}>HOROSCOPES</h1>

                <div className="image">
                    {imageClicked.Capricorn && <img src={Capricorn2} alt="Capricorn" />}
                    {imageClicked.Aquarius && <img src={Aquarius2} alt="Aquarius" />}
                    {imageClicked.Pisces && <img src={Pisces2} alt="Pisces" />} 
                    
                </div>

                <div style={container}>
                    <div style={divStyles}>
                        <img src={capricorn} alt="capricorn"/>
                        <h2 style={h2Styles}>CAPRICORN</h2>
                        <button onClick={() => onClickHandler("Capricorn")} className="Capricorn">Capricorn Text</button>
                    </div>

                    <div style={divStyles}>
                        <img src={aquarius} alt="aquarius"/>
                        <h2 style={h2Styles}>AQUARIUS</h2>
                        <button onClick={() => onClickHandler("Aquarius")} className="Capricorn">Aquarius Text</button>

                    </div>

                    <div style={divStyles}>
                        <img src={pisces} alt="pisces"/>
                        <h2 style={h2Styles}>PISCES</h2>
                        <button onClick={() => onClickHandler("Pisces")} className="Capricorn">Capricorn Text</button>

                    </div>

                    <div style={divStyles}>
                        <img src={aries} alt="aries"/>
                        <h2 style={h2Styles}>ARIES</h2>
                        <button>Click Me</button>
                    </div>

                    <div style={divStyles}>
                        <img src={taurus} alt="taurus"/>
                        <h2 style={h2Styles}>TAURUS</h2>
                        <button>Click Me</button>
                    </div>

                    <div style={divStyles}>
                        <img src={gemini} alt="gemini"/>
                        <h2 style={h2Styles}>GEMINI</h2>
                        <button>Click Me</button>
                    </div>

                    <div style={divStyles}>
                        <img src={cancer} alt="cancer"/>
                        <h2 style={h2Styles}>CANCER</h2>
                        <button>Click Me</button>
                    </div>

                    <div style={divStyles}>
                        <img src={leo} alt="leo"/>
                        <h2 style={h2Styles}>LEO</h2>
                        <button>Click Me</button>
                    </div>

                    <div style={divStyles}>
                        <img src={virgo} alt="virgo"/>
                        <h2 style={h2Styles}>VIRGO</h2>
                        <button>Click Me</button>
                    </div>

                    <div style={divStyles}>
                        <img src={libra} alt="libra"/>
                        <h2 style={h2Styles}>LIBRA</h2>
                        <button>Click Me</button>
                    </div>

                    <div style={divStyles}>
                        <img src={scorpio} alt="scorpio"/>
                        <h2 style={h2Styles}>SCORPIO</h2>
                        <button>Click Me</button>
                    </div>

                    <div style={divStyles}>
                        <img src={sagitarius} alt="sagitarius"/>
                        <h2 style={h2Styles}>SAGITTARIUS</h2>  
                        <button>Click Me</button>
                    </div>
                </div>
                <h1 style={secertMessage}> If you're reading this   </h1>
                <h1 style={secertMessage}> please give us an A   </h1>
                <h1 style={secertMessage}> we are so smart and crafty   </h1>
                <h1 style={secertMessage}> and we work so hard   </h1>
            </div>
        )
    }
    return <Location/>
}

}

