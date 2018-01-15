import React, { Component } from 'react';
import logo from './logo.svg';
import Editor from './editor.js'
import ReactMarkdown from 'react-markdown'
import './App.css';

class App extends Component {

  constructor (props){
		super(props)
		
    this.state = {
      content: '### Type Markdown Here'
		}
		this.onMarkdownChange = this.onMarkdownChange.bind(this);
	}

	onMarkdownChange(props){
		this.setState({
			content: props
		})
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
					<Editor value= {this.state.content} onChange={this.onMarkdownChange} />
				</div>
				<div className="col-xs-12 col-sm-6">
					<h3>Preview</h3>
					<ReactMarkdown id='preview' source={this.state.content}  />
				</div>
			</div>
		</div>
    );
  }
}

export default App;
