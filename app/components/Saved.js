var React = require('react');

var Saved = React.createClass({

	render: function() {
		
		return (

		<div class="row">
					
			<div class="col-lg-12">

				<div class="panel panel-primary">

					<div class="panel-heading">

						<h3 class="panel-title">Saved Articles</h3>

					</div>

					<div class="panel-body">

						<p>
							<Link  to='Child1'><button class="btn btn-warning btn-sm">Show</button></Link>
							<Link  to='Child2'><button class="btn btn-success btn-sm">Remove</button></Link>
						</p>
						{this.router.children}		
					</div>
				</div>
			</div>
		</div>

		);
	}
});

module.exports = Saved;


