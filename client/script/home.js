if (Meteor.isClient) {
    //Accounts.sendVerificationEmail(Meteor.users.findOne()._id, "www.google.com");
    //sazzad@ipvision-inc.com
    Template.home.events({
        'click .logout': function(event, template){
            event.preventDefault();
            Meteor.logout();
        }
    });

}