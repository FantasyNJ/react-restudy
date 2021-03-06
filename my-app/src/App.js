import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             text: 'this is text',
//             car: 0
//         }
//     }
//     update( e ){
//         this.setState({text: e.target.value})
//     }
//     render(){
//         let txt = this.props.txt;
//         let cat = this.props.cat;
//         return (
//             <div>
//                 <input type="text"
//                     onChange={ this.update.bind(this) }
//                 />
//                 <h1> { this.state.text } - { this.state.car } </h1>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             text: 'this is text',
//             car: 0
//         }
//     }
//     update( e ){
//         this.setState({text: e.target.value})
//     }
//     render(){
//         let txt = this.props.txt;
//         let cat = this.props.cat;
//         return (
//             <div>
//                 <Inp update={ this.update.bind(this) }/>
//                 <Inp update={ this.update.bind(this) }/>
//                 <Inp update={ this.update.bind(this) }/>
//                 <h1> { this.state.text } - { this.state.car } </h1>
//             </div>
//         )
//     }
// }
//
// const Inp = (props) => <input type="text" onChange={ props.update }/>

// class App extends React.Component {
//     render(){
//         return <Button>I <Heart /> React</Button>
//     }
// }
//
// const Button = (props) => <button>{ props.children }</button>
//
// class Heart extends React.Component {
//     render(){
//         return <span>&hearts;</span>
//     }
// }

/////

/*
class App extends React.Component {
    render(){
        return <Text text="12345678"/>
    }
}

const Text = (props) => <span>{ props.text }</span>

Text.propTypes = {
    text(props, propName, component){
        if( !(propName in props) ){
            throw new Error(`${propName} is missing`);
        }

        if(props[propName].length < 6){
            throw new Error(`${propName} is short`);
        }
    }
}
*/

/*
class App extends React.Component {
    constructor(){
        super();
        this.update = this.update.bind(this);
        this.state = {
            event: '------',
        }
    }
    update(e){
        this.setState({event: e.type})
    }
    render(){
        return (
            <div>
                <textarea
                    onClick={this.update}
                    cols="30"
                    rows="10"
                ></textarea>
                <div>{ this.state.event }</div>
            </div>
        )
    }
}
*/

// class App extends React.Component {
//     constructor(){
//         super();
//         this.update = this.update.bind(this);
//         this.state = {
//             v1: '',
//             v2: '',
//             v3: ''
//         }
//     }
//     update(e){
//         this.setState({
//             v1: this.refs.a.value,
//             v2: this.b.value,
//             v3: ReactDOM.findDOMNode(this.c).value,
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <input
//                     ref="a"
//                     onChange={ this.update }
//                     type="text"/>
//                 <span>{ this.state.v1 }</span>
//                 <hr/>
//                 <input
//                     ref={ node => this.b = node }
//                     onChange={ this.update }
//                     type="text"/>
//                 <span>{ this.state.v2 }</span>
//                 <hr/>
//                 <Inp
//                     ref={ component => this.c = component }
//                     update={ this.update }
//                 />
//                 <span>{ this.state.v3 }</span>
//             </div>
//         )
//     }
// }
//
// class Inp extends React.Component {
//     render(){
//         return (
//             <input
//                 onChange={ this.props.update }
//                 type="text"
//             />
//         )
//     }
// }

/*
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            val: ++this.state.val
        })
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render(){
        console.log('render')
        return (
            <button onClick={this.update}>{ this.state.val }</button>
        )
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
}

class Wrap extends React.Component {
    mount(){
        ReactDOM.render( <App />,  document.getElementById('a'));
    }
    unmount(){
        ReactDOM.unmountComponentAtNode( document.getElementById('a') );
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>mount</button>
                <button onClick={this.unmount.bind(this)}>unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}
*/

class App extends React.Component {
    constructor(){
        super();
        this.update = this.update.bind(this);
        this.state = {
            increasing: false
        }
    }
    update(){
        ReactDOM.render(<App val={this.props.val + 1} />, document.getElementById('root'));
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            increasing: nextProps.val > this.props.val
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState);
        return nextProps.val % 5 === 0;
    }
    render(){
        return (
            <div>
                <button onClick={this.update} >{this.props.val}</button>
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps.val)
    }
}

App.defaultProps = {
    val: 0
}

// App.defaultProps = {
//     txt: 'lalala',
//     cat: 11,
// }
//
// App.propTypes = {
//     txt: PropTypes.string,
//     cat: PropTypes.number.isRequired,
// }

export default App;