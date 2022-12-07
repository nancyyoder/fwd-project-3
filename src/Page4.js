import React from 'react';
// import img from './img/boots.png';
import img2 from './img/sunset.png';
import arctic from './img/arctic.png';
import './page4.css';

const img = 'url("./img/boots.png")'
const white = '#FFFFFF'
const black = '#000000'
const none = ''
const on = 'visible'
const off = 'hidden'

export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = { backgroundImage: none,
            backgroundImage2: none,
            color: black,
            visibility: off,
            visibility2: off
         };
        this.changeImg = this.changeImg.bind(this);
        this.changeImg2 = this.changeImg2.bind(this);
        this.isCorrect = this.isCorrect.bind(this);
        this.isWrong = this.isWrong.bind(this);
    }


    isCorrect(){
        console.log("is correct here")
        this.setState({ visibility: off })
        this.setState({ visibility2: off })
        const newText = this.state.visibility === off ? on : off;
        this.setState({ visibility: on })

    }

    isWrong(){
        this.setState({ visibility2: off })
        this.setState({ visibility: off })
        const newText2 = this.state.visibility2 === off ? on : off;
        this.setState({ visibility2: on })
    }


    changeImg(){
        this.setState({ backgroundImage: none });
        const newImg = this.state.backgroundImage === none ? img : none;
        this.setState({ backgroundImage: newImg });
    }

    changeImg2(){
        this.setState({ backgroundImage2: none })
        this.setState({ color: black })
        const newImg2 = this.state.backgroundImage2 === none ? img2 : none;
        const newColor = this.state.changeColor === black ? white : black;
        this.setState({ backgroundImage2: newImg2 })
        this.setState({ color: white })
    }
    

    render() {
        const pageStyles = {
            width: '100%',
            padding: '1em',
            paddingTop: '4em',
            backgroundColor: 'black',
            height: '100%'
        }
       const h1Styles = {
            fontSize: '3em',
            marginBlockStart: '0em',
            marginBlockEnd: '0em',
            marginBlock: '0em',
            marginLeft:'2em',
            marginRight:'2em',
            color: 'white'
          }
          const h1Question = {
            fontSize: '2em',
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontWeight: '400',
            fontStyle: 'normal',
            marginBlockStart: '0em',
            marginBlockEnd: '0em',
            marginBlock: '0em',
            marginLeft:'1.5em',
            marginRight:'1.5em',
            marginTop:'1em',
            color: 'white'
          }
        const button1 = {
            fontFamily: 'Ultra, serif',
            backgroundImage: `${this.state.backgroundImage}`,
            width: '4em',
            height: '1.7em',
            backgroundColor: 'white',
            fontSize: '1.2em',
            color: 'black',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            marginLeft: '0.5em',
            marginRight: '0.5em',
            borderRadius:'0.5em',
        }

        const button2 = {
             backgroundImage: `${this.state.backgroundImage2}`,
             width: '3.5em',
             height: '1.5em',
             backgroundColor: 'white',
             fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
             fontWeight: '600',
             fontSize: '1.4em',
             color: `${this.state.color}`,
             backgroundPosition: 'center center',
             backgroundRepeat: 'no-repeat',
             backgroundSize: 'fit',
             margin: '0.2em',
             borderRadius:'0.5em',
            
         }
         
         const h2Styles1 = {
            visibility: `${this.state.visibility}`,
            display: 'block',
            textAlign: 'center',
            color: '#37ed00',
            fontSize: '2em'
         }
         const h2Styles2 = {
            visibility: `${this.state.visibility2}`,
            display: 'block',
            textAlign: 'center',
            color: 'red',
            fontSize: '2em'
        }
        const cover = {
            width: '200px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        const h1Title = {
            color: 'white',
            fontSize: '3em',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            display: 'block',
            textAlign: 'center',
            marginBottom: '2em',
        }


        return (
            <div className='Page' style={pageStyles}>
             <h1 style={h1Title}>Guess The Song From the Following Lyrics...</h1>

                <h1 style={h1Styles}> Arabella's got some interstellagator-skin<button style={button1} onClick={this.changeImg}>boots</button>
                 And a helter skelter around her little finger and I
                
                <div className='wavy'> 
                    <span id="first">r</span>
                    <span id="second">i</span>
                    <span id="third">d</span>
                    <span id="fourth">e</span>
                </div>
                it endlessly
                

                 Shes got a barbarella silver swimsuit and when she needs to shelter from reality she takes a dip in my 
                <div className="colorChange">daydreams</div>
                

                My days end best when the sunset gets itself 
                <button style={button2} onClick={this.changeImg2}>behind</button>
                
                That little lady sitting on the passenger side Its much less picturesque without her catching the
                <div className="glow">light</div>
                </h1>

                <br></br>
                <br></br>
                <br></br>
                <div className='question-card'>
                <h1 style={h1Question}> What is the name of the song above that is from the following album?</h1>
                    
                    <br></br>
                    <img style={cover} src={arctic} alt="arctic monkies"/>
                    <br></br>
                    
                    
                    <br></br>
                    <ul>
                        <li id ="listElements" onClick={this.isWrong}>Do I Wanna Know?</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <li id ="listElements" onClick={this.isWrong}>505</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <li id ="listElements" onClick={this.isCorrect}>Arabella</li>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <li id ="listElements" onClick={this.isWrong}>Flourescent Adolescent</li>
                    </ul>
                   <br></br>
                    <h2 style={h2Styles1}>Correct</h2>
                    <h2 style={h2Styles2}>Incorrect</h2>
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }
}