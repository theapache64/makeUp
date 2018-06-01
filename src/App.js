import React, {Component} from 'react';
import './App.css';
import makeUp from './redux/actions/makeup_action'
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');


const defaults = {
    markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
    javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

class App extends Component {


    componentDidMount() {
        this.props.makeUp('Hello');
    }

    render() {
        return (
            <Grid fluid>
                <Row>

                    <Col md={4}>
                        <CodeMirror
                            options={{
                                mode: 'javascript',
                                lineNumbers : true,
                                isReadOnly : false
                            }} value={defaults.javascript}/>
                    </Col>

                    <Col md={4}>
                        <p>{this.props.convertedCode}</p>
                    </Col>

                    <Col md={4} >
                        <p>{this.props.resourceCode}</p>
                    </Col>

                </Row>
            </Grid>
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
