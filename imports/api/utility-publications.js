


Meteor.publish('utility.userProfile', function(userId){
	check(userId, String);
	console.log('userId ' + userId);
	return Meteor.users.find({_id: userId});
});


Meteor.publish('utility.myUserProfile', function(){
	return Meteor.users.find({_id: this.userId});
});