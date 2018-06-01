import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import makeUp from './redux/actions/makeup_action'
import {connect} from 'react-redux';

class App extends Component {


    componentDidMount() {
        this.props.makeUp('Hello');
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    {this.props.convertedCode}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        convertedCode: state.makeup.convertedCode,
        resourceCode: state.makeup.resourceCode,
    }
};
export default connect(mapStateToProps, {makeUp})(App);
