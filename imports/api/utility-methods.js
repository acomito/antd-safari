import { appConfig } from '../modules/config';
import { Email } from 'meteor/email';

// CONSTANTS
// ==============================
const { supportEmail, appName } = appConfig;
const email = `<${supportEmail}>`;
const fromText = `${appName} ${email}`;


// METHODS
// ==============================
Meteor.methods({


	// ======================================================================================
	// CONTACT FORM ----> SEND CONTACT FORM INFO TO ADMIN/SUPPORT EMAIL
	// ======================================================================================
	'utility.contactForm': function(data){
		check(data, Object);
		
		if (!Meteor.settings.public.emailOn) {
			console.warn(`[${appName}] -- email is turned off so utility.contactForm did not run`);
			return; 
		}

		Email.send({
	       to: Meteor.settings.public.config.supportEmail,
	       from: fromText,
	       subject: `${appName} CONTACT FORM`,
	       html: `from: ${data.email} title: ${data.title} message: ${data.message}`
	   });
		console.log(`[${appName}] - utility.contactForm ran!`);
	},



	// ================================================================================
	//	UPDATE USER PROFILE ----> UPDATES A USERS PROFILE (e.g. MY PROFILE FORM)
	// ================================================================================
	'utility.updateUserProfile': function(data){
		check(data, Object);
		
		let dataToUpdate = {
			'emails.0.address': data.emailAddress,
			'profile.name': {
				first: data.firstName,
				last: data.lastName
			}
		}
		
		Meteor.users.update({_id: this.userId}, { $set: dataToUpdate });
	},



	// ================================================================================
	//	SAVE USER AVATAR ----> UPDATES A USERS PROFILE (e.g. MY PROFILE FORM)
	// ================================================================================
	'utility.saveUserAvatar': function(imageUrl){
		check(imageUrl, String);
		Meteor.users.update({_id: this.userId},{ $set: { 'profile.avatar': imageUrl}});
	},



	// ========================================
	//	DEACTIVATE USER----> DEACTIVATE A USER BY SETTING THEIR DELETED FLAG TO "FALSE"
	// ========================================
	'utility.deactivateUser': function(userId){
		check(userId, String);

		Meteor.users.update({_id: this.userId},{ $set: { 'profile.deleted': true} }, function(error, response){
			if (error) { throw new Meteor.Error('user-update-error', 'error'); }
			//delete records form other collections related to this user (e.g. things he has created)
		});	
	},
});