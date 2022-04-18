import React from 'react';
import styles from '../css/SearchBar.module.css';

class SearchBar extends React.Component {
	state = { city: '' };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.city);
	};

	render() {
		return (
			<div className={styles.mainDiv}>
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<input
							className={styles.search}
							type="text"
							placeholder="Enter a City..."
							value={this.state.city}
							onChange={(e) => this.setState({ city: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
