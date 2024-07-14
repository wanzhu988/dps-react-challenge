import React from 'react';
import './NameFilter.css';

type NameFilterProps = {
	onNameChange: (name: string) => void;
}

const NameFilter= ({ onNameChange }: NameFilterProps) => {
	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onNameChange(event.target.value);
	};
	return (
		<div className="name-filter-container">
			<label className="name-filter-label">Name</label>
			<input
				type="text"
				placeholder="Name"
				className="name-filter"
				onChange={handleNameChange}
			/>
		</div>


	);
};

export default NameFilter;