import NameFilter from "./NameFilter/NameFilter";
import CityFilter from "./CityFilter/CityFilter";
import HighLightCheckbox from "./HighLightCheckbox/HighLightCheckbox";

import './CustomerTable.css';

type Customer = {
	name: string;
	city: string;
	birthday: string;
}

type CustomerTableProps = {
	customers: Customer[];
	onNameChange: (name: string) => void;
	onCityChange: (city: string) => void;
	cities: string[];
}

const CustomerTable = ({ customers, onNameChange, onCityChange, cities }: CustomerTableProps) => {
	return (
		<div className="customer-table-container">
			<div className="filters-container">
				<NameFilter onNameChange={onNameChange} />
				<CityFilter cities={cities} onCityChange={onCityChange}/>
				<HighLightCheckbox />
			</div>
			<div className="data-table-container">
				<table className="data-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>City</th>
							<th>Birthday</th>
						</tr>
					</thead>
					<tbody>
						{customers.map((customer, index) => (
							<tr key={index}>
								<td>{customer.name}</td>
								<td>{customer.city}</td>
								<td>{customer.birthday}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
		
	);
};

export default CustomerTable;