import './NameFilter.css';
const NameFilter = () => {
	return (
		<div className="name-filter-container">
			<label className="name-filter-label">Name</label>
			<input
				type="text"
				placeholder="Name"
				className="name-filter"
			/>
		</div>


	);
};

export default NameFilter;