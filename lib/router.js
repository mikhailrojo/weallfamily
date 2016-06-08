FlowRouter
	.route('/blog/:postId', {
		action: function(params, queryParams){
			console.log(queryParams);
		}
	});
	
	FlowRouter
	.route('/', {
		action: function(params, queryParams){
			console.log('главная');
		}
	});