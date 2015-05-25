User_Profile = new Meteor.Collection('user_profile');

if (Meteor.isClient) {
    Template.profile.events({
        'submit .f_profile': function (event, template) {
            event.preventDefault();

            var ress = Meteor.users.update({
                    _id: Meteor.users.findOne()._id
                }, {
                    $set: {
                        profile: {
                            full_name: template.find('.full_name').value,
                            phone_number: template.find('.phone_number').value,
                            sex: template.find('.sex').value,
                            address: template.find('.address').value,
                            city: template.find('.city').value,
                            country: template.find('.country').value,
                            post_code: template.find('.post_code').value
                        }
                    }
                }
            );

            if (ress === 1) {
                alert("Profile added / updated successfully");
                template.find('.full_name').value = "";
                template.find('.phone_number').value = "";
                template.find('.address').value = "";
                template.find('.city').value  = "";
                template.find('.country').value  = "";
                template.find('.post_code').value  = "";
            } else {
                alert("Something went wrong, Try again");
            }
        }
    });

    Template.profile.helpers({
        profile: function () {
            return {
                profile_info:Meteor.users.findOne().profile
            }
        }
    });

}

