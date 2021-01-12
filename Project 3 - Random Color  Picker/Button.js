import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}