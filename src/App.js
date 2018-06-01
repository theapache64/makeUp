import React, {Component} from 'react';
import './App.css';
import makeUp from './redux/actions/makeup_action'
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/javascript/javascript');

const SAMPLE_JSX = "// Only string props\n" +
    "<TextInput\n" +
    "\tref=\"inputRef\"\n" +
    "\totherTags=\"Some string\"\n" +
    "\tplaceholder=\"Enter your name here\"\n" +
    "    />";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            convertedCode: '',
            resourceCode: ''
        }
    }

    onOriginalCodeChanged = (code) => {
        this.props.makeUp(code);
    };

    componentDidMount() {
        console.log(this.refs.originalCodeEditor);
        // this.refs.originalCodeEditor.codeMirror.setSize("100%", "800px");

        this.props.makeUp(this.refs.originalCodeEditor.codeMirror.doc.getValue());
    }

    componentWillReceiveProps(nextProps) {

        this.refs.convertedCodeEditor.codeMirror.doc.setValue(nextProps.convertedCode);
        this.refs.resourceCodeEditor.codeMirror.doc.setValue(nextProps.resourceCode);
    }

    render() {
        return (
            <Grid fluid>

                {/*Heading*/}
                <Row>
                    <Col md={12} className="text-center">
                        <h1>makeUp!!</h1>
                        <p>string androidized!</p>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <h4>JSX Code</h4>

                        <CodeMirror
                            ref="originalCodeEditor"
                            onChange={(code) => this.onOriginalCodeChanged(code)}
                            value={SAMPLE_JSX}
                            options={{
                                mode: 'javascript',
                                lineNumbers: true,
                                isReadOnly: false
                            }}/>
                    </Col>
                </Row>
                <Row>



                    <Col md={6}>

                        <h4>Converted Code</h4>

                        <CodeMirror
                            ref="convertedCodeEditor"
                            options={{
                                mode: 'javascript',
                                lineNumbers: true,
                                readOnly: true
                            }}/>

                    </Col>

                    <Col md={6}>

                        <h4>Resource Code</h4>

                        <CodeMirror
                            ref="resourceCodeEditor"
                            options={{
                                mode: 'javascript',
                                lineNumbers: true,
                                readOnly: true
                            }}/>
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
