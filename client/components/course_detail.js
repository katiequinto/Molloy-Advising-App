import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

const CourseDetail = ({ course }) => {
  const { _id, course_id, code, course_Name, course_Description } = course;

  return (
      <tr>
        <td><label className="code">{code}{course_id}</label></td>
        <td><label className="courseName">{course_Name}</label></td>
        <td><label className="courseDescription">{course_Description}</label></td>
        <td className="checkbox"><Checkbox /></td>
      </tr>
  );
};

export default CourseDetail;
