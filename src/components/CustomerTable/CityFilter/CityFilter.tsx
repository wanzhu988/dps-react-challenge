import './CityFilter.css';
import React, { useState } from 'react';

type CityFilterProps = {
	cities: string[];
	onCityChange: (city: string) => void;
}

const CityFilter = ({ cities, onCityChange }: CityFilterProps) => {
	const [selectedCity, setSelectedCity] = useState('');

	const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCity(event.target.value);
		onCityChange(event.target.value);
	};

	return (
		<div className="city-filter-container">
			<label className="city-filter-label">City</label>
			<select 
				className="city-filter" 
				onChange={handleCityChange}
				value={selectedCity}
				style={{ color: selectedCity === '' ? 'grey' : 'black' }}
			>
				<option value="" style={{ color: 'grey' }}>Select City</option>
				{cities.map((city, index) => (
					<option key={index} value={city} style={{ color: 'black' }}>
						{city}
					</option>
				))}
			</select>
		</div>
	);
};

export default CityFilter;
