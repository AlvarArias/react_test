import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
                <p>We see in {this.props.minutes} minutes</p>
            </div>
        )
    }

}

ReactDOM.render(
    <Message color="blue "age={50} msg="how are you" minutes={50}/>,
    document.getElementById('root')
)


/*
var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}
*/

/*
const title = React.createElement(
    'h1',{id: 'title', className: 'header', style:style},
    React.createElement(
        'li',
        {},
        'item on our list'
    )   
)
*/

/*
ReactDOM.render (
    <div style={style}>
    <h1 id='heading-element'>Hello word 2</h1>
    <p>We are glad you are here</p>
    </div>,
    
    document.getElementById('root')
)
*/



//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
