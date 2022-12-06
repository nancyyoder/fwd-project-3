import React from 'react';
// import boots from './boots.png';

//import './page5.css';
const img = 'url("./boots.png")'
const none = 'url("./img/aries.png")'

export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = { backgroundImage: none };
        this.changeImg = this.changeImg.bind(this);
    }

    changeImg(){
        const newImg = this.state.backgroundImage === none ? img : none;
        this.setState({ backgroundImage: newImg})
    }

    render() {
        const pageStyles = {
            width: '100%',
            height: '100%'
        }
       const h1Styles = {
            fontSize: '3em',
            backgroundImage: `${this.state.backgroundImage}`,
            fontFamily: 'superior-title, serif',
            fontWeight: '400',
            fontStyle: 'normal',
            margin: '0px'
          }
        const button1 = {
            backgroundImage: `${this.state.backgroundImage}`,
        }
        

        return (
            <div className='Page' style={pageStyles}>
                <h1 style={h1Styles}> Arabella's got some interstellagator-skin<button style={button1} onClick={this.changeImg}>boots</button></h1>
            </div>
        )
    }
}