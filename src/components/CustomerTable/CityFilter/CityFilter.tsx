import './CityFilter.css';

type CityFilterProps = {
	cities: string[];
	onCityChange: (city: string) => void;
}

const CityFilter = ({ cities, onCityChange }: CityFilterProps) => {
	const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onCityChange(event.target.value);
	};

	return (
		<div className="city-filter-container">
			<label className="city-filter-label">City</label>
			<select className="city-filter" onChange={handleCityChange}>
				<option value="">Select City</option>
				{cities.map((city, index) => (
					<option key={index} value={city}>
						{city}
					</option>
				))}
			</select>
		</div>
	);
};

export default CityFilter;