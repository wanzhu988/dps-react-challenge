import './HighLightCheckbox.css';

type HighLightCheckboxProps = {
	onCheckboxChange: (highlight: boolean) => void;
  };

const HighLightCheckbox = ({ onCheckboxChange }: HighLightCheckboxProps) => {
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onCheckboxChange(event.target.checked);
	};
  
	return (
		<div className="high-light-check-box-container">
			<div className="check-box-span-container">
				<span>Highlight oldest</span> <br/>
				<span>per city</span>
			</div>
			<div className='high-light-check-box'> 
				<input 
					type="checkbox" 
					className='check-box'
					onChange={handleCheckboxChange}
				/>
			</div>

		</div>

	);
};

export default HighLightCheckbox;