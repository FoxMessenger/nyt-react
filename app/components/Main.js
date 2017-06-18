var React = require('react');

var Link = require('react-router').Link;

var Main = React.createClass({

	render: function() {

		return (
		
			<div class="container">
				<div class="jumbotron">
					<h2><strong>Which Child???</strong></h2>
					<p><em>A journey through the whimsical world of React Routing</em></p>
					<hr />
					{/*<p>
						<Link to='/child1'><button class="btn btn-primary btn-lg">Show Child #1</button></Link>
						<Link to='/child2'><button class="btn btn-danger btn-lg">Show Child #2</button></Link>
					</p>*/}
				</div>
			</div>
		)
	}
})

module.exports = Main;