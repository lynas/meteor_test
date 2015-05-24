if (Meteor.isClient) {
    Template.navigation.events({
        'click .logout-nav': function(event, template){
            event.preventDefault();
            Meteor.logout();
        }
    });

}