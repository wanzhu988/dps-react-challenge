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
			<label className="check-box-label">
				Highlight oldest per city
			</label>
			<input 
				type="checkbox" 
				className="high-light-check-box"
				onChange={handleCheckboxChange}
			/>
		</div>

	);
};

export default HighLightCheckbox;