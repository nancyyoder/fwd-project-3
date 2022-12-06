import React from 'react';

const pink = '#ED2E8F';
const green = '#069E68';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: pink };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        const newColor = this.state.color === pink ? green : pink;
        this.setState({ color: newColor })
    }

    render() {

        const pageStyles = {
            width: '100%',
            height: '100%',
            background: 'black'
        }

        const h1Styles = {
            fontSize: '3em',
            color: `${this.state.color}`,
            fontFamily: 'superior-title, serif',
            fontWeight: '400',
            fontStyle: 'normal',
            margin: '0px',
            // background: 'orange'
        }
        const h2Styles = {
            fontSize: '2em',
            color: '#069E68',
            fontFamily: 'superior-title, serif',
            fontWeight: '400',
            fontStyle: 'italic',
            padding: '0px',
            margin: '0px',
            // background: 'yellow'
        }

        const h3Styles = {
            fontSize: '4em',
            color: '#ED2E8F',
            fontFamily: 'bd-supper, sans-serif',
            fontWeight: '700',
            fontStyle: 'normal',
            padding: '0px',
            margin: '0px',
            display: 'inline-block'
        }

        const pStyles = {
            fontSize: '2em',
            color: '#069E68',
            fontFamily: 'poppins, sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            padding: '0px',
            margin: '0px',
            display: 'inline-block'
        }

        const pLineStyles = {
            fontSize: '1.5em',
            color: '#069E68',
            fontFamily: 'poppins, sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            padding: '0px',
            margin: '0px',
            // display: 'inline-block'  
        }

        return (
            <div classname='Page' style={pageStyles}>
                <h1 style={h1Styles} onClick={this.changeColor}>ACROSTIC POEMS ABOUT GOING GRAY IN MY 30s</h1>
                <h2 style={h2Styles}>By Kerry Elson</h2>
                <h2 style={h2Styles}>July 10, 2021</h2>
                <h3 style={h3Styles}>W</h3>
                <p style={pStyles}>hite hairs multiplying</p> 
                <br></br>
                <h3 style={h3Styles}>O</h3>
                <p style={pStyles}>n temples, and even on my head.</p> 
                <br></br>
                <h3 style={h3Styles}>W</h3>
                <p style={pStyles}>hat should I do about them?</p> 
                <br></br>
                <p style={pLineStyles}>Greg, my stylist, hasn’t said anything.</p>
                <p style={pLineStyles}>Really wonder if I should initiate conversation</p>
                <p style={pLineStyles}>About dyeing my hair, or if we can just keep going like normal.</p>
                <p style={pLineStyles}>Yesterday, I saw another long, white one in a place I didn’t expect.</p>
                <h3 style={h3Styles}>A</h3>
                <p style={pStyles}>lso, when it’s wet,</p> 
                <br></br>
                <h3 style={h3Styles}>G</h3>
                <p style={pStyles}>oing to note that my hair is</p> 
                <br></br>
                <h3 style={h3Styles}>E</h3>
                <p style={pStyles}>specially dark and vibrant.</p> 
            </div>
        )
    }
}