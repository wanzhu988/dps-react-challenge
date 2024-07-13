import dpsLogo from './assets/DPS.svg';
import './App.css';
import CustomerTable from './components/CustomerTable/CustomerTable';
import { useState, useEffect } from 'react';
import axios from 'axios';

type Customer = {
	name: string;
	city: string;
	birthday: string;
}

type User = {
	id: number;
	firstName: string;
	lastName: string;
	birthDate: string;
	address: {
		city: string;
	};
  };

function App() {
	const [customers, setCustomers] = useState<Customer[]>([]);

	useEffect(() => {
		const fetchCustomers = async () => {
			try{
				const response = await axios.get('https://dummyjson.com/users');
				const users = response.data.users;

				const formattedCustomers = users.map((user: User) => {
					const name = `${user.firstName} ${user.lastName}`;
					const city = user.address.city;
					const birthday = new Date(user.birthDate).toLocaleDateString('en-GB').replace(/\//g, '.');

					return { name, city, birthday };
				});

				setCustomers(formattedCustomers);
			}catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchCustomers();
	},[]);
	

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
