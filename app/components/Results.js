// This may become a child of Search
var React = require('react');

var Results = React.createClass({

	render: function() {
		
		return (

		<div class="row">
					
			<div class="col-lg-12">

				<div class="panel panel-primary">

					<div class="panel-heading">

						<h3 class="panel-title">Results</h3>

					</div>

					<div class="panel-body">

						<p>
							<Link  to='Child1'><button class="btn btn-warning btn-sm">Save</button></Link>
						</p>
						{this.router.children}		
					</div>
				</div>
			</div>
		</div>

		);
	}
});

module.exports = Results;


