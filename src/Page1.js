import React from 'react';
// import './Page.css';
// import image from './image.png';
import old_test from './old_test.png';
import Page2 from './Page2.js';
import new_test from './new_test.png';

const old_pic = old_test;
const new_pic = new_test;

export default class Page extends React.Component {
    constructor(props) {
        super();
        this.state = {click: true};
        this.changePic = this.changePic.bind(this);
    }

    changePic() {
        console.log(this.state.click);
        this.setState((oldState) => (
            {click: !oldState.click}
        ));
    }

    render() {
        const pageStyles = {
            width: '100%',
            height: '100%',
            background: 'black',
            display: 'flex'
        }

        return (
            <div>
                <div classname='Page' style={pageStyles}>
                    <img onClick={this.changePic} src={this.state.click ? old_pic : new_pic}  alt="art"/>
                    <Page2 color='black' />
                </div>
            </div>

        )
    }
}