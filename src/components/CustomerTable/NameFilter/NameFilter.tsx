import React, { useEffect, useState } from 'react';
import './NameFilter.css';
import '../../../hooks/useDebounce';
import useDebounce from '../../../hooks/useDebounce';

type NameFilterProps = {
	onNameChange: (name: string) => void;
}

const NameFilter= ({ onNameChange }: NameFilterProps) => {
	const [inputName, setInputName] = useState<string>('');
	const debouncedName = useDebounce(inputName, 1000);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputName(event.target.value);
	};

	useEffect(() => {
		onNameChange(debouncedName);
	},[debouncedName, onNameChange]);

	return (
		<div className="name-filter-container">
			<label className="name-filter-label">Name</label>
			<input
				type="text"
				placeholder="Name"
				className="name-filter"
				value={inputName}
				onChange={handleNameChange}
			/>
		</div>


	);
};

export default NameFilter;