if (Meteor.isClient) {
    Meteor.subscribe("apps_ios");
    Template.home.events({
        'click .logout': function(event, template){
            event.preventDefault();
            Meteor.logout();
        }
    });

    Template.home.helpers({
        apps_ios: function () {
            return Apps_IOS.find()
        }
    });


}