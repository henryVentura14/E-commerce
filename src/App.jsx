import React from 'react';
import './styles/app.css';
import Form from './components/Form/Form'
import Budget from './components/Budget/Budget'

const App = () => {
	return (
		<main className="app">
			<Form />
			<Budget />
		</main>
	);
};

export default App;


