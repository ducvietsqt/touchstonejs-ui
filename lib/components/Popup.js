'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Popup',

	propTypes: {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		visible: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			transition: 'none'
		};
	},

	renderBackdrop: function renderBackdrop() {
		if (!this.props.visible) return null;
		return React.createElement('div', { className: 'Popup-backdrop' });
	},

	renderDialog: function renderDialog() {
		if (!this.props.visible) return null;

		// Set classnames
		var dialogClassName = classnames('Popup-dialog', this.props.className);

		return React.createElement(
			'div',
			{ className: dialogClassName },
			this.props.children
		);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Popup' },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Popup-dialog', component: 'div' },
				this.renderDialog()
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Popup-background', component: 'div' },
				this.renderBackdrop()
			)
		);
	}
});