import './HighLightCheckbox.css';

const HighLightCheckbox = () => {
	return (
		<div className="high-light-check-box-container">
			<label className="check-box-label">
				Highlight oldest per city
			</label>
			<input type="checkbox" className="high-light-check-box"/>
		</div>

	);
};

export default HighLightCheckbox;