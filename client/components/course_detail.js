import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

const CourseDetail = ({ course }) => {
  const { _id, course_id, code, course_Name, course_Description } = course;

  return (
    <div>
      <tr>
        <td><label className="courseId">{course_id}</label></td>
        <td><label className="code">{subject_id}</label></td>
        <td><label className="courseName">{course_Name}</label></td>
        <td><label className="courseDescription">{course_Description}</label></td>
        <td className="checkbox"><Checkbox /></td>
      </tr>
    </div>
  );
};

export default CourseDetail;
