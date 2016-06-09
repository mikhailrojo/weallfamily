FlowRouter
	.route('/names', {
		action: function(params, queryParams){
			BlazeLayout.render("secondLayout");
		}
	});
	
	FlowRouter
	.route('/', {
		action: function(params, queryParams){
			BlazeLayout.render("mainLayout");
		}
	});