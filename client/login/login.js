if (Meteor.isClient) {
    Template.login.events({
        'submit .register': function(event, template){
            event.preventDefault();
            Accounts.createUser({
                email: template.find('#register_email').value,
                password: template.find('#register_password').value
            });
        },'submit .login': function(event, template){
            event.preventDefault();
            var login_email = template.find('#login_email').value;
            var login_password = template.find('#login_password').value;
            Meteor.loginWithPassword(login_email, login_password, function(data){
                console.log(data);
                alert(data.message);
            });
        }
    });

}