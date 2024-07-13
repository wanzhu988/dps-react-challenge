import dpsLogo from './assets/DPS.svg';
import './App.css';
import CustomerTable from './components/CustomerTable/CustomerTable';
import { useState } from 'react';

function App() {
	const [customers] = useState([
		{ name: 'Alotta Fudge', city: 'New York', birthday: '1.3.1995' },
		{ name: 'Anita Bath', city: 'Jacksonville', birthday: '7.5.1980' },
		{ name: 'Paige Turner', city: 'Washington', birthday: '13.2.1975' },
		{ name: 'Stan Still', city: 'Dallas', birthday: '31.10.1952' },
		{ name: 'Terry Aki', city: 'Columbus', birthday: '3.1.1960' }
	]);

	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				<p>Your solution goes here 😊</p>
				<CustomerTable customers={customers}/>
			</div>
		</>
	);
}

export default App;
