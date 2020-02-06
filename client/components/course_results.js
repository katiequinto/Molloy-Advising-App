import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Courses } from '../../imports/collections/courses';
import { Checkbox } from '@material-ui/core';

const PER_PAGE = 20;

class CourseResults extends Component {
  componentWillMount() {
    this.page = 1;
    this.addedCourses = [];
  }

  handleButtonClick() {

  }

  renderRows() {
    return this.props.courses.map(course => {
      const { _id, course_id, code, course_Name, course_Description } = course;

      return (
        <tr key={_id}>
          <td>{code}</td>
          <td>{course_id}</td>
          <td>{course_Name}</td>
          <td>{course_Description}</td>
          <td className="checkbox"><Checkbox /></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table id="courseResultsTable">
            <thead>
              <tr>
                <td><label>ID</label></td>
                <td><label>Code</label></td>
                <td><label>Name</label></td>
                <td><label>Description</label></td>
                <td>Select</td>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
            {/*
            <div className="course-list">
              {this.props.courses.map(course =>
                <CourseDetail key={course._id} course={course} />)}
            </div>
            */}
        </table>
        <button id="addButton" className="pageBtn"
        onClick={this.handleButtonClick}>Confirm</button>
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
