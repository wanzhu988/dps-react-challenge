import './CityFilter.css';

const CityFilter = () => {
	return (
		<div className="city-filter-container">
			<label className="city-filter-label">City</label>
			<select className="city-filter">
				<option value="">Select City</option>
			</select>
		</div>
	);
};

export default CityFilter;