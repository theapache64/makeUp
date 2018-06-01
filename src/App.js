import React, {Component} from 'react';
import './App.css';
import makeUp from './redux/actions/makeup_action'
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';

require('codemirror/mode/javascript/javascript');


const defaults = {
    markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
    javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
};

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            convertedCode : '',
            resourceCode : ''
        }
    }

    componentDidMount() {
        console.log(this.refs.originalCodeEditor);
       // this.refs.originalCodeEditor.codeMirror.setSize("100%", "800px");

        this.props.makeUp(this.refs.originalCodeEditor.codeMirror.doc.getValue());
    }


    componentWillReceiveProps(nextProps) {
        this.refs.convertedCodeEditor.codeMirror.doc.setValue(nextProps.convertedCode);
        this.refs.resourceCodeEditor.codeMirror.doc.setValue(nextProps.resourceCode);
    }

    onOriginalCodeChanged = (code) => {
        this.props.makeUp(code);
    };

    render() {
        return (
            <Grid fluid>
                <Row>

                    <Col md={4}>

                        <h4>Original Code</h4>

                        <CodeMirror
                            ref="originalCodeEditor"
                            onChange={(code) => this.onOriginalCodeChanged(code)}
                            options={{
                                mode: 'javascript',
                                lineNumbers: true,
                                isReadOnly: false
                            }} value={defaults.javascript}/>

                    </Col>

                    <Col md={4}>

                        <h4>Converted Code</h4>

                        <CodeMirror
                            ref="convertedCodeEditor"
                            options={{
                                mode: 'javascript',
                                lineNumbers: true,
                                readOnly: true
                            }}/>

                    </Col>

                    <Col md={4}>

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
