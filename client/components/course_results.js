import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CourseDetail from './course_detail';
import { Courses } from '../../imports/collections/courses';
import Button from '@material-ui/core/Button';

const PER_PAGE = 20;

class CourseResults extends Component {
  componentWillMount() {
    this.page = 1;
    this.addedCourses = [];
  }

  render() {
    return (
      <div>
        <table id="courseResultsTable">
            <thead>
              <tr>
                <td><label>ID</label></td>
                <td><label>Name</label></td>
                <td><label>Description</label></td>
                <td>Select</td>
              </tr>
            </thead>
            <tbody>
            {this.props.courses.map(course =>
              <CourseDetail key={course._id} course={course} />)}
            </tbody>
        </table>
      </div>
    )
  }
}

export default withTracker(() => {
  // set up subscription
  Meteor.subscribe('courses');

  // return an object. Whatever we return will be sent to CourseResults
  // as props
  return { courses: Courses.find({}).fetch() };
}) (CourseResults);
