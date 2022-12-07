import React, { useState } from "react";

import capricorn from './horoscope/capricorn.png';
import Capricorn2 from './horoscope/Capricorn-txt2.png';

import aquarius from './horoscope/aquarius.png';
import Aquarius2 from './horoscope/Aquarius-txt.png';

import pisces from './horoscope/pisces.png';
import Pisces2 from './horoscope/Pisces-txt.png';

import aries from './horoscope/aries.png';
import Aries2 from './horoscope/Aries-txt.png';

import taurus from './horoscope/taurus.png';
import Taurus2 from './horoscope/Taurus-txt.png';

import gemini from './horoscope/gemini.png';
import Gemini2 from './horoscope/Gemini-txt.png';

import cancer from './horoscope/cancer.png';
import Cancer2 from './horoscope/Cancer-txt.png';

import leo from './horoscope/leo.png';
import Leo2 from './horoscope/Leo-txt.png';

import virgo from './horoscope/virgo.png';
import Virgo2 from './horoscope/Virgo-txt.png';

import libra from './horoscope/libra.png';
import Libra2 from './horoscope/Libra-txt.png';

import scorpio from './horoscope/scorpio.png';
import Scorpio2 from './horoscope/Scorpio-txt.png';

import sagitarius from './horoscope/sagitarius.png';
import Sagittarius2 from './horoscope/Sagittarius-txt.png';

  

export default class Page extends React.Component {

    render() {

        //all image states false except clicked image
        const Location = () => {
            const [imageClicked, setImageClicked] = useState({
              Capricorn: false,
              Aquarius: false,
              Pisces: false,
              Aries: false,
              Taurus: false,
              Gemini: false,
              Cancer: false,
              Leo: false,
              Virgo: false, 
              Libra: false, 
              Scorpio: false, 
              Sagittarius: false 
            })
            const onClickHandler = (order) => {
                const resetImages = {
                    Capricorn: false,
                    Aquarius: false,
                    Pisces: false,
                    Aries: false,
                    Taurus: false,
                    Gemini: false,
                    Cancer: false,
                    Leo: false,
                    Virgo: false, 
                    Libra: false, 
                    Scorpio: false, 
                    Sagittarius: false 
                }
                setImageClicked({
                  resetImages,
                  [order]: true
                })
              }

        const pageStyles = {
            width: '100%',
            height: '100%',
            background: 'black'
        }

        const divStyles = {
            textAlign: 'center',
            display: 'inline-block',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '65px',
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
            color: '#B56DAD',
            fontFamily: 'superior-title, serif',
            fontWeight: '500',
            fontStyle: 'normal',
            margin: '0px',
        }

         const buttonStyles = {
            backgroundColor: 'white',
            color: '#800080',
            borderRadius:'8px',
            borderColor:'#B56DAD',
            fontFamily: 'Myriad Pro Regular',
            fontWeight: '800',
            fontSize: '1em'
         }
    

        const imageStyles = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
  
        }

        return (
            <div className='Page' style={pageStyles}>
                <h1 style={h1Styles}>HOROSCOPES</h1>

                <div className="image" style={imageStyles}>
                    {imageClicked.Capricorn && <img src={Capricorn2} alt="Capricorn"  />}
                    {imageClicked.Aquarius && <img src={Aquarius2} alt="Aquarius" />}
                    {imageClicked.Pisces && <img src={Pisces2} alt="Pisces" />} 
                    {imageClicked.Aries && <img src={Aries2} alt="Aries"  />}
                    {imageClicked.Taurus && <img src={Taurus2} alt="Taurus" />}
                    {imageClicked.Gemini && <img src={Gemini2} alt="Gemini" />} 
                    {imageClicked.Cancer && <img src={Cancer2} alt="Cancer"  />}
                    {imageClicked.Leo && <img src={Leo2} alt="Leo" />}
                    {imageClicked.Virgo && <img src={Virgo2} alt="Virgo" />} 
                    {imageClicked.Libra && <img src={Libra2} alt="Libra"  />}
                    {imageClicked.Scorpio && <img src={Scorpio2} alt="Scorpio" />}
                    {imageClicked.Sagittarius && <img src={Sagittarius2} alt="Sagittarius" />} 
                    
                </div>


                <div style={divStyles}>
                    <img src={capricorn} alt="capricorn"/>
                    <h2 style={h2Styles}>CAPRICORN</h2>
                    <button onClick={() => onClickHandler("Capricorn")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>
                </div>

                <div style={divStyles}>
                    <img src={aquarius} alt="aquarius"/>
                    <h2 style={h2Styles}>AQUARIUS</h2>
                    <button onClick={() => onClickHandler("Aquarius")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={pisces} alt="pisces"/>
                    <h2 style={h2Styles}>PISCES</h2>
                    <button onClick={() => onClickHandler("Pisces")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={aries} alt="aries"/>
                    <h2 style={h2Styles}>ARIES</h2>
                    <button onClick={() => onClickHandler("Aries")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={taurus} alt="taurus"/>
                    <h2 style={h2Styles}>TAURUS</h2>
                    <button onClick={() => onClickHandler("Taurus")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={gemini} alt="gemini"/>
                    <h2 style={h2Styles}>GEMINI</h2>
                    <button onClick={() => onClickHandler("Gemini")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <br></br>

                <div style={divStyles}>
                    <img src={cancer} alt="cancer"/>
                    <h2 style={h2Styles}>CANCER</h2>
                    <button onClick={() => onClickHandler("Cancer")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={leo} alt="leo"/>
                    <h2 style={h2Styles}>LEO</h2>
                    <button onClick={() => onClickHandler("Leo")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={virgo} alt="virgo"/>
                    <h2 style={h2Styles}>VIRGO</h2>
                    <button onClick={() => onClickHandler("Virgo")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={libra} alt="libra"/>
                    <h2 style={h2Styles}>LIBRA</h2>
                    <button onClick={() => onClickHandler("Libra")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={scorpio} alt="scorpio"/>
                    <h2 style={h2Styles}>SCORPIO</h2>
                    <button onClick={() => onClickHandler("Scorpio")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div style={divStyles}>
                    <img src={sagitarius} alt="sagitarius"/>
                    <h2 style={h2Styles}>SAGITTARIUS</h2>  
                    <button onClick={() => onClickHandler("Sagittarius")} className="Capricorn" style={buttonStyles}>Dec '22 Reading</button>

                </div>

                <div>
                    <h1>This is a secret message</h1>
                    <h1>please give us an A!</h1>
                    <h1>we are so smart and crafty</h1>
                    <h1>xoxoxoxoxox</h1>
                </div>

            </div>
        )
    }
    return <Location/>
}

}
