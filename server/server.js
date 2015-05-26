process.env.MAIL_URL = "smtp://ipv.sazzad@gmail.com:testipvision@smtp.gmail.com:465/";

/*Email.send({
 from: "meteor.email.2014@gmail.com",
 to: "ipv.sazzad@gmail.com",
 subject: "Meteor Can Send Emails via Gmail",
 text: "Its pretty easy to send emails via gmail."
 });*/
Accounts.config({sendVerificationEmail: true, forbidClientAccountCreation: false});
User_Profile = new Meteor.Collection('user_profile');
//Apps_IOS = new Meteor.Collection('apps_ios');
Apps_GP  = new Meteor.Collection('apps_gp');
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

    /*Meteor.publish('apps_ios', function () {
        return Apps_IOS.find({},{limit:20})
    });*/
    Meteor.publish('apps_gps', function () {
        return Apps_GP.find({},{limit:20})
    });


/*    var myjson = {};
    myjson = JSON.parse(Assets.getText("chunkab.json"));
    console.log("myjson.length");
    console.log(myjson.length);

    console.log(myjson.length);
    for(var i = 0; i < myjson.length; i++) {
        var obj = myjson[i];
        Apps_GP.insert(obj)

        console.log(obj.webUrl);
    }*/

    Meteor.methods({
        test_server: function (test) {
            this.unblock();
            return "from server"+test;
        }
    });
}























