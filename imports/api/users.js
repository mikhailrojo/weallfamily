import {Mongo} from 'meteor/mongo';
export const Users = new Mongo.Collection('newUsers');

if(Meteor.isServer){
	Meteor.publish('showUsers', function(){
		return Users.find();
	});
}