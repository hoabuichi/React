import React from 'react';
import Header from './shared/header/header.jsx';

class App extends React.Component {
	render() {
		return <Header></Header>;
	}
}

React.render(<App></App>, document.getElementById('app'));