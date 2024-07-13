import React from 'react';
import './NameFilter.css';

type NameFilterProps = {
	onFilterChange: (filterText: string) => void;
}

const NameFilter= ({ onFilterChange }: NameFilterProps) => {
	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onFilterChange(event.target.value);
	};
	return (
		<div className="name-filter-container">
			<label className="name-filter-label">Name</label>
			<input
				type="text"
				placeholder="Name"
				className="name-filter"
				onChange={handleFilterChange}
			/>
		</div>


	);
};

export default NameFilter;