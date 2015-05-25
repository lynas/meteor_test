User_Profile = new Meteor.Collection('user_profile');
if (Meteor.isServer) {
    Meteor.startup(function () {
        if (User_Profile.find({}).count() === 0) {
            User_Profile.insert({
                of_user: "xEasdaN7EraGN",
                full_name: "213",
                phone_number: "123",
                sex: "asd",
                address: "sad"
            });
        }

    });
}