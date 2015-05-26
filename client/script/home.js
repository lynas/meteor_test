
if (Meteor.isClient) {
    Template.home.events({
        'click .logout': function(event, template){
            event.preventDefault();
            Meteor.logout();
        },
        'click .testb': function(event, template){
            event.preventDefault();
            //alert("works");
            Meteor.call("test_server", "test arg", function(err,res){
                alert(res);
            })
        }
    });

/*
    Template.home.helpers({
        apps_ios: function () {
            return Apps_IOS.find()
        }
    });
*/


    Template.home.helpers({
        apps_gp: function () {
            return Apps_GP.find()
        }
    });


}