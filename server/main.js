import { Meteor } from 'meteor/meteor';
import '../imports/collections/courses.js';

Meteor.startup(() => {

/*
  Meteor.publish('courses', function(per_page) {
    return Courses.find({}, { limit: per_page });
  });
  */
});
