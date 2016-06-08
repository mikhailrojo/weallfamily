import {Template} from 'meteor/templating';

import './body.html';

Template.body.helpers({
	users: [
		{name: 'Александр'},
		{name: 'Алексей'},
		{name: 'Анатолий'},
		{name: 'Виктор'}
	]
});