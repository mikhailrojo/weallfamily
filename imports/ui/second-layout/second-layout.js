import {Template} from 'meteor/templating';
import {Users} from '../../api/users.js';
import {ReactiveDict} from 'meteor/reactive-dict';
import './second-layout.html';

Template.secondLayout.onCreated(function(){
	this.dict = new ReactiveDict();
});

Template.secondLayout.helpers({

	users(){
		var input = Template.instance().dict.get("value");
		if(input){
			return Users.find({name: new RegExp(input)});
		}else{
			return Users.find({}, {sort:{name}});
		}		
	}
});

Template.secondLayout.events({
	'keyup #inputField'(event, template){
		var input = event.target.value;
		template.dict.set("value", input);
	}
});

