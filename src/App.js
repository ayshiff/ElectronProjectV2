import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      content: '### Type Markdown Here'
    }
  }

  render() {
    return (
      <div className="container-fluid">
			<div className="row">
				<h1 className="text-center">
					ReactJS Markdown Editor
				</h1>
				<div className="col-xs-12 col-sm-6">
					<h3>Markdown</h3>
					<textarea id="markdown" className="markdown" defaultValue={this.state.content}></textarea>
				</div>
				<div className="col-xs-12 col-sm-6">
					<h3>Preview</h3>
					<div id="preview"></div>
				</div>
			</div>
		</div>
    );
  }
}

export default App;
