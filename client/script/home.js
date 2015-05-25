if (Meteor.isClient) {
    Template.home.events({
        'click .logout': function(event, template){
            event.preventDefault();
            Meteor.logout();
        }
    });

}