Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params

    if (!Meteor.userId()) {
        // if the user is not logged in, render the Login template
        this.layout('auth_layout');
        this.render('login');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.render('home');
        this.next();
    }
});


Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function () {
    this.layout('layout');

});

Router.route('/login', function () {
   // this.layout('auth_layout');
    this.render('login');
});

Router.route('/admin', function () {
    this.render('admin');
});