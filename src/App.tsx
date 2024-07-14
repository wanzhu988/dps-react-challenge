import dpsLogo from './assets/DPS.svg';
import './App.css';
import CustomerTable from './components/CustomerTable/CustomerTable';
import { useState, useEffect } from 'react';
import axios from 'axios';

type Customer = {
	name: string;
	city: string;
	birthday: string;
	highlight?: boolean;
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
	const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
	const [filterName, setFilterName] = useState<string>('');
	const [filterCity, setFilterCity] = useState<string>('');
	const [cities, setCities] = useState<string[]>([]);
	const [highlightOldestCustomers, setHighlightOldestCustomers] = useState<boolean>(false);

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

				const citiesOptions = Array.from(new Set(users.map((user: User) => user.address.city))) as string[];
				setCities(citiesOptions);
			}catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchCustomers();
	},[]);

	useEffect(() => {
		const result = customers.filter((customer) => {
			const matcheName = customer.name.toLowerCase().includes(filterName.toLowerCase());
			const matcheCity = filterCity ? customer.city === filterCity : true;
			return matcheName && matcheCity;
		});

		if (highlightOldestCustomers) {
			const oldestCustomers = new Map<string, Customer>();

			result.forEach(customer => {
				const birthDate = new Date(customer.birthday.split('.').reverse().join('-'));
				if (!oldestCustomers.has(customer.city) || birthDate < new Date(oldestCustomers.get(customer.city)!.birthday.split('.').reverse().join('-'))) {
					oldestCustomers.set(customer.city, customer);
				}
			});

			result.forEach(customer => {
				customer.highlight = customer === oldestCustomers.get(customer.city);
			});
		} else {
			result.forEach(customer => {
				customer.highlight = false;
			});
		}

		setFilteredCustomers(result);
	}, [customers, filterName, filterCity, highlightOldestCustomers]);

	const handleNameChange = (name: string) => {
		setFilterName(name);
	};

	const handleCityChange = (city: string) => {
		setFilterCity(city);
	};

	const handleCheckboxChange = (highlight: boolean) => {
		setHighlightOldestCustomers(highlight);
	};
	

	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				<p>Your solution goes here 😊</p>
				<CustomerTable 
					customers={filteredCustomers} 
					onNameChange={handleNameChange}
					onCityChange={handleCityChange}
					onCheckboxChange={handleCheckboxChange}
					cities={cities} />
			</div>
		</>
	);
}

export default App;
