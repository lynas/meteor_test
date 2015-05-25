Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params

    if (!Meteor.userId()) {
        // if the user is not logged in, render the Login template
        this.layout('auth_layout');
        this.render('login', {to: 'left'});
        this.render('register', {to: 'right'});
        //this.render('login');
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

Router.map(function(){
    this.route('home',{path:'/'});
    this.route('admin',{path:'/admin'});
    this.route('login',{path:'/login'});
    this.route('profile',{path:'/profile'});
    //We can tell our route function which layout template to use by calling the layout method.
    /*this.route('/', function () {
     this.layout('home');
     });*/
});
