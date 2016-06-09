import {Mongo} from 'meteor/mongo';
let db = 'mongodb://meteorx:meteorx@ds011374.mlab.com:11374/meteorx';
export const Users = new Mongo.Collection('newUsers');

if(Meteor.isServer){
	Meteor.publish('showUsers', function(){
		return Users.find(); 
	});
}