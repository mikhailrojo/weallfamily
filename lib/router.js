FlowRouter
	.route('/names', {
		action: function(params, queryParams){
			BlazeLayout.render("secondLayout", {area: "blog"});
		}
	});
	
	FlowRouter
	.route('/', {
		action: function(params, queryParams){
			console.log('главная');
			BlazeLayout.render("mainLayout", {area: "blog"});
		}
	});