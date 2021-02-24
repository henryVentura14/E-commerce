import React from 'react';
import './styles/app.css';
import Form from './components/Form/Form'
import Budget from './components/Budget/Budget'

const App = () => {
	return (
		<div>
			<Form />
			<Budget />
			<h1>Hello App</h1>
		</div>
	);
};

export default App;


