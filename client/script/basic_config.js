Apps_GP = new Meteor.Collection('apps_gp');
Apps_IOS = new Meteor.Collection('apps_ios');

if (Meteor.isClient) {
    Meteor.subscribe("apps_ios");
    Meteor.subscribe("apps_gps");
}