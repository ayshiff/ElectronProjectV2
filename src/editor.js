import React, { Component } from 'react';
import CodeMirror from '@skidding/react-codemirror';

require('codemirror/mode/markdown/markdown');
require('codemirror/theme/monokai.css');
require('codemirror/lib/codemirror.css');

class Editor extends Component {
    constructor(props){
        super(props)

        this.updateCode = this.updateCode.bind(this);
    }
    
    updateCode(e){
        this.props.onChange(e);
    }

    render() {

        var options = {
            mode: 'markdown',
            theme: 'monokai',
        }

        return(

            <CodeMirror value= {this.props.value} options={options} onChange={this.updateCode} />
            
        );
    }

}

export default Editor;