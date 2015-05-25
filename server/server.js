process.env.MAIL_URL="smtp://ipv.sazzad@gmail.com:testipvision@smtp.gmail.com:465/";

/*Email.send({
    from: "meteor.email.2014@gmail.com",
    to: "ipv.sazzad@gmail.com",
    subject: "Meteor Can Send Emails via Gmail",
    text: "Its pretty easy to send emails via gmail."
});*/
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